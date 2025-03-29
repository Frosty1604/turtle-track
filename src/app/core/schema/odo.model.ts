import {
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxJsonSchema,
  toTypedRxJsonSchema,
} from 'rxdb';

const odoSchemaLiteral = {
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 100,
    },
    odo: {
      type: 'integer',
    },
    dateTime: {
      type: 'string',
      format: 'date-time',
    },
  },
  required: ['id', 'odo', 'dateTime'],
} as const;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const odoSchemaTyped = toTypedRxJsonSchema(odoSchemaLiteral);

export type OdoDocType = ExtractDocumentTypeFromTypedRxJsonSchema<
  typeof odoSchemaTyped
>;

export const odoSchema: RxJsonSchema<OdoDocType> = odoSchemaLiteral;
