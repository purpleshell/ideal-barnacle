export class ValidationError {
  static formatError(message: any, params: any, ...args: any[]): any;
  static isError(err: any): any;
  constructor(errors: any, value: any, field: any, type: any);
  name: any;
  value: any;
  path: any;
  type: any;
  errors: any;
  inner: any;
  message: any;
}
export function addMethod(schemaType: any, name: any, fn: any): void;
export class array {
  constructor(type: any);
  cast(value: any, options: any): any;
  clone(): any;
  compact(rejector: any): any;
  concat(schema: any): any;
  describe(): any;
  ensure(): any;
  equals(enums: any, message: any): any;
  getDefault(options: any): any;
  is(enums: any, message: any): any;
  isType(v: any): any;
  isValid(value: any, options: any): any;
  isValidSync(value: any, options: any): any;
  label(_label: any): any;
  max(_max: any, message: any): any;
  meta(obj: any, ...args: any[]): any;
  min(_min: any, message: any): any;
  nope(enums: any, message: any): any;
  not(enums: any, message: any): any;
  notOneOf(enums: any, message: any): any;
  notRequired(): any;
  nullable(isNullable: any): any;
  of(schema: any): any;
  oneOf(enums: any, message: any): any;
  optional(): any;
  required(message: any): any;
  resolve(options: any): any;
  strict(isStrict: any): any;
  strip(_strip: any): any;
  test(...args: any[]): any;
  transform(fn: any): any;
  typeError(message: any): any;
  validate(value: any, options: any): any;
  validateAt(path: any, value: any, options: any): any;
  validateSync(value: any, options: any): any;
  validateSyncAt(path: any, value: any, options: any): any;
  when(keys: any, options: any, ...args: any[]): any;
  withMutation(fn: any): any;
}
export class bool {
  cast(value: any, options: any): any;
  clone(): any;
  concat(schema: any): any;
  describe(): any;
  equals(enums: any, message: any): any;
  getDefault(options: any): any;
  is(enums: any, message: any): any;
  isType(v: any): any;
  isValid(value: any, options: any): any;
  isValidSync(value: any, options: any): any;
  label(_label: any): any;
  meta(obj: any, ...args: any[]): any;
  nope(enums: any, message: any): any;
  not(enums: any, message: any): any;
  notOneOf(enums: any, message: any): any;
  notRequired(): any;
  nullable(isNullable: any): any;
  oneOf(enums: any, message: any): any;
  optional(): any;
  required(message: any): any;
  resolve(options: any): any;
  strict(isStrict: any): any;
  strip(_strip: any): any;
  test(...args: any[]): any;
  transform(fn: any): any;
  typeError(message: any): any;
  validate(value: any, options: any): any;
  validateAt(path: any, value: any, options: any): any;
  validateSync(value: any, options: any): any;
  validateSyncAt(path: any, value: any, options: any): any;
  when(keys: any, options: any, ...args: any[]): any;
  withMutation(fn: any): any;
}
export class boolean {
  cast(value: any, options: any): any;
  clone(): any;
  concat(schema: any): any;
  describe(): any;
  equals(enums: any, message: any): any;
  getDefault(options: any): any;
  is(enums: any, message: any): any;
  isType(v: any): any;
  isValid(value: any, options: any): any;
  isValidSync(value: any, options: any): any;
  label(_label: any): any;
  meta(obj: any, ...args: any[]): any;
  nope(enums: any, message: any): any;
  not(enums: any, message: any): any;
  notOneOf(enums: any, message: any): any;
  notRequired(): any;
  nullable(isNullable: any): any;
  oneOf(enums: any, message: any): any;
  optional(): any;
  required(message: any): any;
  resolve(options: any): any;
  strict(isStrict: any): any;
  strip(_strip: any): any;
  test(...args: any[]): any;
  transform(fn: any): any;
  typeError(message: any): any;
  validate(value: any, options: any): any;
  validateAt(path: any, value: any, options: any): any;
  validateSync(value: any, options: any): any;
  validateSyncAt(path: any, value: any, options: any): any;
  when(keys: any, options: any, ...args: any[]): any;
  withMutation(fn: any): any;
}
export class date {
  cast(value: any, options: any): any;
  clone(): any;
  concat(schema: any): any;
  describe(): any;
  equals(enums: any, message: any): any;
  getDefault(options: any): any;
  is(enums: any, message: any): any;
  isType(v: any): any;
  isValid(value: any, options: any): any;
  isValidSync(value: any, options: any): any;
  label(_label: any): any;
  max(_max: any, message: any): any;
  meta(obj: any, ...args: any[]): any;
  min(_min: any, message: any): any;
  nope(enums: any, message: any): any;
  not(enums: any, message: any): any;
  notOneOf(enums: any, message: any): any;
  notRequired(): any;
  nullable(isNullable: any): any;
  oneOf(enums: any, message: any): any;
  optional(): any;
  required(message: any): any;
  resolve(options: any): any;
  strict(isStrict: any): any;
  strip(_strip: any): any;
  test(...args: any[]): any;
  transform(fn: any): any;
  typeError(message: any): any;
  validate(value: any, options: any): any;
  validateAt(path: any, value: any, options: any): any;
  validateSync(value: any, options: any): any;
  validateSyncAt(path: any, value: any, options: any): any;
  when(keys: any, options: any, ...args: any[]): any;
  withMutation(fn: any): any;
}
export function isSchema(obj: any): any;
export function lazy(fn: any): any;
export class mixed {
  constructor(options: any);
  tests: any;
  transforms: any;
  cast(value: any, options: any): any;
  clone(): any;
  concat(schema: any): any;
  describe(): any;
  equals(enums: any, message: any): any;
  getDefault(options: any): any;
  is(enums: any, message: any): any;
  isType(v: any): any;
  isValid(value: any, options: any): any;
  isValidSync(value: any, options: any): any;
  label(_label: any): any;
  meta(obj: any, ...args: any[]): any;
  nope(enums: any, message: any): any;
  not(enums: any, message: any): any;
  notOneOf(enums: any, message: any): any;
  notRequired(): any;
  nullable(isNullable: any): any;
  oneOf(enums: any, message: any): any;
  optional(): any;
  required(message: any): any;
  resolve(options: any): any;
  strict(isStrict: any): any;
  strip(_strip: any): any;
  test(...args: any[]): any;
  transform(fn: any): any;
  typeError(message: any): any;
  validate(value: any, options: any): any;
  validateAt(path: any, value: any, options: any): any;
  validateSync(value: any, options: any): any;
  validateSyncAt(path: any, value: any, options: any): any;
  when(keys: any, options: any, ...args: any[]): any;
  withMutation(fn: any): any;
}
export class number {
  cast(value: any, options: any): any;
  clone(): any;
  concat(schema: any): any;
  describe(): any;
  equals(enums: any, message: any): any;
  getDefault(options: any): any;
  integer(message: any): any;
  is(enums: any, message: any): any;
  isType(v: any): any;
  isValid(value: any, options: any): any;
  isValidSync(value: any, options: any): any;
  label(_label: any): any;
  lessThan(less: any, message: any): any;
  max(_max: any, message: any): any;
  meta(obj: any, ...args: any[]): any;
  min(_min: any, message: any): any;
  moreThan(more: any, message: any): any;
  negative(msg: any): any;
  nope(enums: any, message: any): any;
  not(enums: any, message: any): any;
  notOneOf(enums: any, message: any): any;
  notRequired(): any;
  nullable(isNullable: any): any;
  oneOf(enums: any, message: any): any;
  optional(): any;
  positive(msg: any): any;
  required(message: any): any;
  resolve(options: any): any;
  round(method: any): any;
  strict(isStrict: any): any;
  strip(_strip: any): any;
  test(...args: any[]): any;
  transform(fn: any): any;
  truncate(): any;
  typeError(message: any): any;
  validate(value: any, options: any): any;
  validateAt(path: any, value: any, options: any): any;
  validateSync(value: any, options: any): any;
  validateSyncAt(path: any, value: any, options: any): any;
  when(keys: any, options: any, ...args: any[]): any;
  withMutation(fn: any): any;
}
export class object {
  constructor(spec: any);
  fields: any;
  camelCase(): any;
  cast(value: any, options: any): any;
  clone(): any;
  concat(schema: any): any;
  constantCase(): any;
  describe(): any;
  equals(enums: any, message: any): any;
  from(_from: any, to: any, alias: any): any;
  getDefault(options: any): any;
  is(enums: any, message: any): any;
  isType(v: any): any;
  isValid(value: any, options: any): any;
  isValidSync(value: any, options: any): any;
  label(_label: any): any;
  meta(obj: any, ...args: any[]): any;
  noUnknown(noAllow: any, message: any): any;
  nope(enums: any, message: any): any;
  not(enums: any, message: any): any;
  notOneOf(enums: any, message: any): any;
  notRequired(): any;
  nullable(isNullable: any): any;
  oneOf(enums: any, message: any): any;
  optional(): any;
  required(message: any): any;
  resolve(options: any): any;
  shape(schema: any, excludes: any): any;
  snakeCase(): any;
  strict(isStrict: any): any;
  strip(_strip: any): any;
  test(...args: any[]): any;
  transform(fn: any): any;
  transformKeys(fn: any): any;
  typeError(message: any): any;
  unknown(allow: any, message: any): any;
  validate(value: any, options: any): any;
  validateAt(path: any, value: any, options: any): any;
  validateSync(value: any, options: any): any;
  validateSyncAt(path: any, value: any, options: any): any;
  when(keys: any, options: any, ...args: any[]): any;
  withMutation(fn: any): any;
}
export function reach(obj: any, path: any, value: any, context: any): any;
export function ref(key: any, options: any): any;
export function setLocale(custom: any): void;
export class string {
  cast(value: any, options: any): any;
  clone(): any;
  concat(schema: any): any;
  describe(): any;
  email(message: any): any;
  ensure(): any;
  equals(enums: any, message: any): any;
  getDefault(options: any): any;
  is(enums: any, message: any): any;
  isType(v: any): any;
  isValid(value: any, options: any): any;
  isValidSync(value: any, options: any): any;
  label(_label: any): any;
  length(_length: any, message: any): any;
  lowercase(message: any): any;
  matches(regex: any, options: any): any;
  max(_max: any, message: any): any;
  meta(obj: any, ...args: any[]): any;
  min(_min: any, message: any): any;
  nope(enums: any, message: any): any;
  not(enums: any, message: any): any;
  notOneOf(enums: any, message: any): any;
  notRequired(): any;
  nullable(isNullable: any): any;
  oneOf(enums: any, message: any): any;
  optional(): any;
  required(message: any): any;
  resolve(options: any): any;
  strict(isStrict: any): any;
  strip(_strip: any): any;
  test(...args: any[]): any;
  transform(fn: any): any;
  trim(message: any): any;
  typeError(message: any): any;
  uppercase(message: any): any;
  url(message: any): any;
  validate(value: any, options: any): any;
  validateAt(path: any, value: any, options: any): any;
  validateSync(value: any, options: any): any;
  validateSyncAt(path: any, value: any, options: any): any;
  when(keys: any, options: any, ...args: any[]): any;
  withMutation(fn: any): any;
}