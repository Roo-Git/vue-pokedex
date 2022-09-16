export type Pokemon = {
  id: string;
  types: PokemonType[];
  name: string;
  img: string;
  dreamImg: string;
  height: number;
  weight: number;
  attacks: string[];
  sprites: {
    front_default: string;
    other: { dream_world: { front_default: string } };
  };
  abilities: PokemonAbility[];
};

type PokemonType = {
  type: { name: string };
};

type PokemonAbility = {
  ability: { name: string };
};

export type ActiveTypesType = {
  grass: boolean;
  fire: boolean;
  water: boolean;
  bug: boolean;
  normal: boolean;
  electric: boolean;
  poison: boolean;
  rock: boolean;
  ghost: boolean;
  fighting: boolean;
  ground: boolean;
  dragon: boolean;
  ice: boolean;
  psychic: boolean;
};
