import { Character } from "@/types/character";

export interface ApiResponse {
  results: Character[];
}

export async function getCharacters(): Promise<Character[]> {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const data: ApiResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}