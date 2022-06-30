// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Type = {
  "ACADEMICS": "ACADEMICS",
  "SHOP": "SHOP",
  "RESTARUANT": "RESTARUANT",
  "CAFE": "CAFE",
  "TOURIST_SPOT": "TOURIST_SPOT"
};

const { Places } = initSchema(schema);

export {
  Places,
  Type
};