import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Input } from '../ui';
import Select from '../ui/Select';
import { Person, useCreateSquadMutation } from '@/graphql/generated/schema';
import { STORAGE_SQUAD_KEY } from '@/constants';
import { isNonNullable } from '@/lib/utils';

type FormData = {
  name: string;
  characters: string[];
};

const checkIfSpeciesAlreadySelected = ({
  allPeople,
  selectedId,
  selectedArrayWithSpecies,
}: {
  allPeople: Person[];
  selectedId: string;
  selectedArrayWithSpecies: any;
}) => {
  const selectedPerson = allPeople.find((person) => person.id === selectedId);
  const selectedPersonSpeciesName = selectedPerson?.species?.name;

  const selectedPersonSpeciesAlreadySelected = selectedArrayWithSpecies.some(
    (person: any) =>
      selectedPersonSpeciesName &&
      person.species?.name === selectedPersonSpeciesName
  );

  return selectedPersonSpeciesAlreadySelected;
};

interface CreateSquadFormProps {
  data: (Person | null)[] | undefined | null;
  onCreateSquad: () => void;
}

const CreateSquadForm = ({
  data: rawData,
  onCreateSquad,
}: CreateSquadFormProps) => {
  const data = rawData?.filter(isNonNullable) ?? [];

  const [infoMessage, setInfoMessage] = useState('');
  const [selectedCharacters, setSelectedCharacters] = useState<
    { label: string; value: string }[]
  >([]);

  const [
    createSquadMutation,
    { data: createdSquadData, loading, error: errorCreateSquad },
  ] = useCreateSquadMutation();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isDirty },
    reset,
    watch,
    setError,
  } = useForm<FormData>({
    defaultValues: { name: '', characters: [] },
  });
  const watchData = watch();

  const characterOptions = data?.map((person: any) => ({
    label: `${person?.name} (${person?.species?.name || 'unknown'})`,
    value: person?.id,
  }));

  const mappedSelectedCharacters = selectedCharacters.map(
    (selectedItem: any) => {
      const selectedPerson = data.find(
        (person) => person.id === selectedItem.value
      );
      return {
        ...selectedPerson,
        species: selectedPerson?.species,
      };
    }
  );

  useEffect(() => {
    if (isDirty) {
      sessionStorage.setItem(STORAGE_SQUAD_KEY, JSON.stringify(watchData));
    }
  }, [isDirty, watchData]);

  useEffect(() => {
    const sessionStorageData = sessionStorage.getItem(STORAGE_SQUAD_KEY);
    const parsedSessionStorageData = sessionStorageData
      ? JSON.parse(sessionStorageData)
      : null;

    if (parsedSessionStorageData) {
      setSelectedCharacters(parsedSessionStorageData.characters);
      reset(parsedSessionStorageData);
    }
  }, []);

  useEffect(() => {
    if (errorCreateSquad) {
      setInfoMessage('There was an error when creating the squad.');
    }
  }, [errorCreateSquad]);

  const handleCreateSquad = async (data: FormData) => {
    const selectedIds = data.characters.map(
      (selectedItem: any) => selectedItem.value
    );
    await createSquadMutation({
      variables: {
        name: data.name,
        characters: selectedIds,
      },
    });
    sessionStorage.removeItem(STORAGE_SQUAD_KEY);
    reset();
    setSelectedCharacters([]);
    onCreateSquad();
  };

  const handleSelectCharacters = (selected: any) => {
    const isSpeciesAlreadySelected = checkIfSpeciesAlreadySelected({
      allPeople: data,
      selectedId: selected[selected.length - 1]?.value,
      selectedArrayWithSpecies: mappedSelectedCharacters,
    });

    if (selected.length > 5) {
      setError('characters', {
        message: "You can't select more than 5 characters.",
      });
      return;
    }

    if (selected.length < selectedCharacters.length) {
      setSelectedCharacters(selected);
      setValue('characters', selected, {
        shouldDirty: true,
        shouldValidate: true,
      });
      return;
    }

    if (!isSpeciesAlreadySelected) {
      setSelectedCharacters(selected);
      setValue('characters', selected, {
        shouldDirty: true,
        shouldValidate: true,
      });
    } else {
      if (isSpeciesAlreadySelected) {
        setError('characters', {
          message: 'You can only select one character per species.',
        });
        return;
      }
    }
  };

  const squadCreatedSuccessMessage = createdSquadData
    ? 'Squad was created successfully'
    : '';
  const errorCreateSquadMessage = errorCreateSquad
    ? 'There was an error when creating the squad.'
    : '';

  return (
    <form onSubmit={handleSubmit(handleCreateSquad)}>
      <h2 className="mb-3 py-6 text-4xl font-black">Create Squad</h2>
      <p className="mb-6">
        Choose 3 to 5 characters to create a squad. You can select only one
        character per species.
      </p>
      <p className="my-3 text-sm text-red-500">{infoMessage}</p>
      <Input
        label="Name"
        type="text"
        {...register('name', { required: 'This is a required field' })}
        error={errors.name}
      />
      <Controller
        name="characters"
        control={control}
        rules={{
          required: 'This is a required field',
          validate: {
            minLength: (value) =>
              value.length >= 3 || 'You have to select at least 3 characters',
          },
        }}
        render={({ field }) => (
          <Select
            label="Characters"
            {...field}
            options={characterOptions}
            onChange={handleSelectCharacters}
            value={selectedCharacters}
            error={errors.characters}
          />
        )}
      />
      {squadCreatedSuccessMessage && (
        <p className="my-3 text-sm text-green-600">
          {squadCreatedSuccessMessage}
        </p>
      )}

      {errorCreateSquadMessage && (
        <p className="my-3 text-sm text-green-600">{errorCreateSquadMessage}</p>
      )}

      <div className="w-full text-right">
        <Button
          type="submit"
          variant="destructive"
          className="mt-10 px-8 py-5"
          loading={loading}
          disabled={loading}
        >
          Create
        </Button>
      </div>
    </form>
  );
};

export default CreateSquadForm;
