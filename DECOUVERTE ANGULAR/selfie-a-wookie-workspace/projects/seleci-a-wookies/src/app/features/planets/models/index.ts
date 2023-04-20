export type ApiResult = {
  results: {
    name: string
  }[]
}

/**
 * Planet model
 * @param name planet name
 */
export interface Planet {
  name: string;
  id: number;
}

/**
 *
 */
export type Planets = Planet[];
