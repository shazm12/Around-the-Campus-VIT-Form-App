import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Type {
  ACADEMICS = "ACADEMICS",
  SHOP = "SHOP",
  RESTARUANT = "RESTARUANT",
  CAFE = "CAFE",
  TOURIST_SPOT = "TOURIST_SPOT"
}



type PlacesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Places {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly type?: Type | keyof typeof Type | null;
  readonly lat?: number | null;
  readonly lng: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Places, PlacesMetaData>);
  static copyOf(source: Places, mutator: (draft: MutableModel<Places, PlacesMetaData>) => MutableModel<Places, PlacesMetaData> | void): Places;
}