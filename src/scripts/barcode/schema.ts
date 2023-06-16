import { string } from 'yup'
import { BARCODE_LENGTH } from './constants'

export const barcodeSchema = string()
  .ensure()
  .transform((value) => value.trim().replaceAll('-', ''))
  .matches(/^[0-9]+$/, 'Code should only contain numbers')
  .length(BARCODE_LENGTH, `Code length should be exactly ${BARCODE_LENGTH}`)
