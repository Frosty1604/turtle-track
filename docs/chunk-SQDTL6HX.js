import {
  $ as q,
  Ba as O,
  Ca as H,
  Da as K,
  Fa as $,
  S as f,
  T as _,
  V as U,
  W as D,
  Y as M,
  Z as y,
  _ as g,
  aa as h,
  fa as B,
  ga as C,
  ha as A,
  ja as o,
  ka as l,
  na as m,
  oa as I,
  pa as p,
  ra as F,
  xa as W,
} from './chunk-N6NGTOBN.js';
import './chunk-KAT7YFEL.js';
var R = {
  UT1: 'given name is no string or empty',
  UT2: `collection- and database-names must match the regex to be compatible with couchdb databases.
    See https://neighbourhood.ie/blog/2020/10/13/everything-you-need-to-know-about-couchdb-database-names/
    info: if your database-name specifies a folder, the name must contain the slash-char '/' or '\\'`,
  UT3: 'replication-direction must either be push or pull or both. But not none',
  UT4: 'given leveldown is no valid adapter',
  UT5: 'keyCompression is set to true in the schema but no key-compression handler is used in the storage',
  UT6: 'schema contains encrypted fields but no encryption handler is used in the storage',
  UT7: 'attachments.compression is enabled but no attachment-compression plugin is used',
  PL1: 'Given plugin is not RxDB plugin.',
  PL3: 'A plugin with the same name was already added but it was not the exact same JavaScript object',
  P2: 'bulkWrite() cannot be called with an empty array',
  QU1: 'RxQuery._execOverDatabase(): op not known',
  QU4: 'RxQuery.regex(): You cannot use .regex() on the primary field',
  QU5: 'RxQuery.sort(): does not work because key is not defined in the schema',
  QU6: 'RxQuery.limit(): cannot be called on .findOne()',
  QU9: 'throwIfMissing can only be used in findOne queries',
  QU10: 'result empty and throwIfMissing: true',
  QU11: 'RxQuery: no valid query params given',
  QU12: 'Given index is not in schema',
  QU13: 'A top level field of the query is not included in the schema',
  QU14: 'Running a count() query in slow mode is now allowed. Either run a count() query with a selector that fully matches an index or set allowSlowCount=true when calling the createRxDatabase',
  QU15: 'For count queries it is not allowed to use skip or limit',
  QU16: '$regex queries must be defined by a string, not an RegExp instance. This is because RegExp objects cannot be JSON stringified and also they are mutable which would be dangerous',
  QU17: 'Chained queries cannot be used on findByIds() RxQuery instances',
  QU18: 'Malformated query result data. This likely happens because you create a OPFS-storage RxDatabase inside of a worker but did not set the usesRxDatabaseInWorker setting. https://rxdb.info/rx-storage-opfs.html#setting-usesrxdatabaseinworker-when-a-rxdatabase-is-also-used-inside-of-the-worker ',
  MQ1: 'path must be a string or object',
  MQ2: 'Invalid argument',
  MQ3: 'Invalid sort() argument. Must be a string, object, or array',
  MQ4: 'Invalid argument. Expected instanceof mquery or plain object',
  MQ5: 'method must be used after where() when called with these arguments',
  MQ6: "Can't mix sort syntaxes. Use either array or object | .sort([['field', 1], ['test', -1]]) | .sort({ field: 1, test: -1 })",
  MQ7: 'Invalid sort value',
  MQ8: "Can't mix sort syntaxes. Use either array or object",
  DB1: 'RxDocument.prepare(): another instance on this adapter has a different password',
  DB2: 'RxDatabase.addCollections(): collection-names cannot start with underscore _',
  DB3: 'RxDatabase.addCollections(): collection already exists. use myDatabase[collectionName] to get it',
  DB4: 'RxDatabase.addCollections(): schema is missing',
  DB5: 'RxDatabase.addCollections(): collection-name not allowed',
  DB6: 'RxDatabase.addCollections(): another instance created this collection with a different schema. Read this https://rxdb.info/questions-answers.html?console=qa#cant-change-the-schema ',
  DB8: `createRxDatabase(): A RxDatabase with the same name and adapter already exists.
Make sure to use this combination only once or set ignoreDuplicate to true if you do this intentional-
This often happens in react projects with hot reload that reloads the code without reloading the process.`,
  DB11: 'createRxDatabase(): Invalid db-name, folder-paths must not have an ending slash',
  DB12: 'RxDatabase.addCollections(): could not write to internal store',
  DB13: 'createRxDatabase(): Invalid db-name or collection name, name contains the dollar sign',
  DB14: 'no custom reactivity factory added on database creation',
  COL1: 'RxDocument.insert() You cannot insert an existing document',
  COL2: 'RxCollection.insert() fieldName ._id can only be used as primaryKey',
  COL3: 'RxCollection.upsert() does not work without primary',
  COL4: 'RxCollection.incrementalUpsert() does not work without primary',
  COL5: 'RxCollection.find() if you want to search by _id, use .findOne(_id)',
  COL6: 'RxCollection.findOne() needs a queryObject or string',
  COL7: 'hook must be a function',
  COL8: 'hooks-when not known',
  COL9: 'RxCollection.addHook() hook-name not known',
  COL10: 'RxCollection .postCreate-hooks cannot be async',
  COL11: 'migrationStrategies must be an object',
  COL12: 'A migrationStrategy is missing or too much',
  COL13: 'migrationStrategy must be a function',
  COL14: 'given static method-name is not a string',
  COL15: 'static method-names cannot start with underscore _',
  COL16: 'given static method is not a function',
  COL17: 'RxCollection.ORM: statics-name not allowed',
  COL18: 'collection-method not allowed because fieldname is in the schema',
  COL20: 'Storage write error',
  COL21:
    'The RxCollection is destroyed or removed already, either from this JavaScript realm or from another, like a browser tab',
  CONFLICT:
    'Document update conflict. When changing a document you must work on the previous revision',
  COL22:
    '.bulkInsert() and .bulkUpsert() cannot be run with multiple documents that have the same primary key',
  DOC1: 'RxDocument.get$ cannot get observable of in-array fields because order cannot be guessed',
  DOC2: 'cannot observe primary path',
  DOC3: 'final fields cannot be observed',
  DOC4: 'RxDocument.get$ cannot observe a non-existed field',
  DOC5: 'RxDocument.populate() cannot populate a non-existed field',
  DOC6: 'RxDocument.populate() cannot populate because path has no ref',
  DOC7: 'RxDocument.populate() ref-collection not in database',
  DOC8: 'RxDocument.set(): primary-key cannot be modified',
  DOC9: 'final fields cannot be modified',
  DOC10: 'RxDocument.set(): cannot set childpath when rootPath not selected',
  DOC11: "RxDocument.save(): can't save deleted document",
  DOC13: 'RxDocument.remove(): Document is already deleted',
  DOC14: 'RxDocument.destroy() does not exist',
  DOC15: 'query cannot be an array',
  DOC16:
    'Since version 8.0.0 RxDocument.set() can only be called on temporary RxDocuments',
  DOC17:
    'Since version 8.0.0 RxDocument.save() can only be called on non-temporary documents',
  DOC18: 'Document property for composed primary key is missing',
  DOC19: 'Value of primary key(s) cannot be changed',
  DOC20: 'PrimaryKey missing',
  DOC21:
    'PrimaryKey must be equal to PrimaryKey.trim(). It cannot start or end with a whitespace',
  DOC22: 'PrimaryKey must not contain a linebreak',
  DOC23: 'PrimaryKey must not contain a double-quote ["]',
  DOC24:
    'Given document data could not be structured cloned. This happens if you pass non-plain-json data into it, like a Date() object or a Function. In vue.js this happens if you use ref() on the document data which transforms it into a Proxy object.',
  DM1: 'migrate() Migration has already run',
  DM2: 'migration of document failed final document does not match final schema',
  DM3: 'migration already running',
  DM4: 'Migration errored',
  DM5: 'Cannot open database state with newer RxDB version. You have to migrate your database state first. See https://rxdb.info/migration-storage.html?console=storage ',
  AT1: 'to use attachments, please define this in your schema',
  EN1: 'password is not valid',
  EN2: 'validatePassword: min-length of password not complied',
  EN3: 'Schema contains encrypted properties but no password is given',
  EN4: 'Password not valid',
  JD1: 'You must create the collections before you can import their data',
  JD2: 'RxCollection.importJSON(): the imported json relies on a different schema',
  JD3: 'RxCollection.importJSON(): json.passwordHash does not match the own',
  LD1: "RxDocument.allAttachments$ can't use attachments on local documents",
  LD2: 'RxDocument.get(): objPath must be a string',
  LD3: 'RxDocument.get$ cannot get observable of in-array fields because order cannot be guessed',
  LD4: 'cannot observe primary path',
  LD5: 'RxDocument.set() id cannot be modified',
  LD6: 'LocalDocument: Function is not usable on local documents',
  LD7: 'Local document already exists',
  LD8: 'localDocuments not activated. Set localDocuments=true on creation, when you want to store local documents on the RxDatabase or RxCollection.',
  RC1: 'Replication: already added',
  RC2: 'replicateCouchDB() query must be from the same RxCollection',
  RC4: 'RxCouchDBReplicationState.awaitInitialReplication() cannot await initial replication when live: true',
  RC5: 'RxCouchDBReplicationState.awaitInitialReplication() cannot await initial replication if multiInstance because the replication might run on another instance',
  RC6: 'syncFirestore() serverTimestampField MUST NOT be part of the collections schema and MUST NOT be nested.',
  RC7: 'SimplePeer requires to have process.nextTick() polyfilled, see https://rxdb.info/replication-webrtc.html?console=webrtc ',
  RC_PULL:
    'RxReplication pull handler threw an error - see .errors for more details',
  RC_STREAM:
    'RxReplication pull stream$ threw an error - see .errors for more details',
  RC_PUSH:
    'RxReplication push handler threw an error - see .errors for more details',
  RC_PUSH_NO_AR:
    'RxReplication push handler did not return an array with the conflicts',
  RC_WEBRTC_PEER: 'RxReplication WebRTC Peer has error',
  RC_COUCHDB_1:
    "replicateCouchDB() url must end with a slash like 'https://example.com/mydatabase/'",
  RC_COUCHDB_2: 'replicateCouchDB() did not get valid result with rows.',
  RC_OUTDATED: 'Outdated client, update required. Replication was canceled',
  RC_UNAUTHORIZED:
    'Unauthorized client, update the replicationState.headers to set correct auth data',
  RC_FORBIDDEN:
    'Client behaves wrong so the replication was canceled. Mostly happens if the client tries to write data that it is not allowed to',
  SC1: 'fieldnames do not match the regex',
  SC2: "SchemaCheck: name 'item' reserved for array-fields",
  SC3: 'SchemaCheck: fieldname has a ref-array but items-type is not string',
  SC4: 'SchemaCheck: fieldname has a ref but is not type string, [string,null] or array<string>',
  SC6: 'SchemaCheck: primary can only be defined at top-level',
  SC7: 'SchemaCheck: default-values can only be defined at top-level',
  SC8: 'SchemaCheck: first level-fields cannot start with underscore _',
  SC10: 'SchemaCheck: schema defines ._rev, this will be done automatically',
  SC11: 'SchemaCheck: schema needs a number >=0 as version',
  SC13: 'SchemaCheck: primary is always index, do not declare it as index',
  SC14: 'SchemaCheck: primary is always unique, do not declare it as index',
  SC15: 'SchemaCheck: primary cannot be encrypted',
  SC16: 'SchemaCheck: primary must have type: string',
  SC17: 'SchemaCheck: top-level fieldname is not allowed',
  SC18: 'SchemaCheck: indexes must be an array',
  SC19: 'SchemaCheck: indexes must contain strings or arrays of strings',
  SC20: 'SchemaCheck: indexes.array must contain strings',
  SC21: 'SchemaCheck: given index is not defined in schema',
  SC22: 'SchemaCheck: given indexKey is not type:string',
  SC23: 'SchemaCheck: fieldname is not allowed',
  SC24: 'SchemaCheck: required fields must be set via array. See https://spacetelescope.github.io/understanding-json-schema/reference/object.html#required',
  SC25: 'SchemaCheck: compoundIndexes needs to be specified in the indexes field',
  SC26: 'SchemaCheck: indexes needs to be specified at collection schema level',
  SC27: 'SchemaCheck: encrypted fields need to be specified at collection schema level',
  SC28: 'SchemaCheck: encrypted fields is not defined in the schema',
  SC29: "SchemaCheck: missing object key 'properties'",
  SC30: 'SchemaCheck: primaryKey is required',
  SC32: 'SchemaCheck: primary field must have the type string/number/integer',
  SC33: 'SchemaCheck: used primary key is not a property in the schema',
  SC34: 'Fields of type string that are used in an index, must have set the maxLength attribute in the schema',
  SC35: 'Fields of type number/integer that are used in an index, must have set the multipleOf attribute in the schema',
  SC36: 'A field of this type cannot be used as index',
  SC37: 'Fields of type number that are used in an index, must have set the minimum and maximum attribute in the schema',
  SC38: 'Fields of type boolean that are used in an index, must be required in the schema',
  SC39: 'The primary key must have the maxLength attribute set',
  SC40: '$ref fields in the schema are not allowed. RxDB cannot resolve related schemas because it would have a negative performance impact.It would have to run http requests on runtime. $ref fields should be resolved during build time.',
  SC41: 'minimum, maximum and maxLength values for indexes must be real numbers, not Infinity or -Infinity',
  VD1: 'Sub-schema not found, does the schemaPath exists in your schema?',
  VD2: 'object does not match schema',
  S1: 'You cannot create collections after calling RxDatabase.server()',
  GQL1: 'GraphQL replication: cannot find sub schema by key',
  GQL3: 'GraphQL replication: pull returns more documents then batchSize',
  CRDT1:
    'CRDT operations cannot be used because the crdt options are not set in the schema.',
  CRDT2:
    'RxDocument.incrementalModify() cannot be used when CRDTs are activated.',
  CRDT3:
    'To use CRDTs you MUST NOT set a conflictHandler because the default CRDT conflict handler must be used',
  SNH: 'This should never happen',
};
var S;
function V() {
  if (!S) {
    var e = new K(),
      t = Object.getOwnPropertyNames(e),
      r = Object.getOwnPropertyNames(Object.getPrototypeOf(e));
    S = [...t, ...r];
  }
  return S;
}
var k;
function G() {
  if (!k) {
    var e = new $('pseudoInstance', 'memory'),
      t = Object.getOwnPropertyNames(e),
      r = Object.getOwnPropertyNames(Object.getPrototypeOf(e));
    (k = [...t, ...r]), e.destroy();
  }
  return k;
}
var le = H(O),
  ue = new le(),
  P;
function b() {
  if (!P) {
    var e = ['deleted', 'synced'],
      t = Object.getOwnPropertyNames(ue),
      r = Object.getOwnPropertyNames(O);
    P = [...t, ...r, ...e];
  }
  return P;
}
function de(e) {
  if (e !== '_deleted') {
    if (['properties'].includes(e)) throw o('SC23', { fieldName: e });
    var t = '^[a-zA-Z](?:[[a-zA-Z0-9_]*]?[a-zA-Z0-9])?$',
      r = new RegExp(t);
    if (e !== '_id' && !e.match(r)) throw o('SC1', { regex: t, fieldName: e });
  }
}
function he(e) {
  var t = p(e.primaryKey);
  function r(i, n, c) {
    if (
      (typeof i == 'string' &&
        typeof n == 'object' &&
        !Array.isArray(n) &&
        c.split('.').pop() !== 'patternProperties' &&
        de(i),
      Object.prototype.hasOwnProperty.call(n, 'item') && n.type !== 'array')
    )
      throw o('SC2', { fieldName: i });
    if (
      Object.prototype.hasOwnProperty.call(n, 'required') &&
      typeof n.required == 'boolean'
    )
      throw o('SC24', { fieldName: i });
    if (Object.prototype.hasOwnProperty.call(n, '$ref'))
      throw o('SC40', { fieldName: i });
    if (Object.prototype.hasOwnProperty.call(n, 'ref'))
      if (Array.isArray(n.type)) {
        if (
          n.type.length > 2 ||
          !n.type.includes('string') ||
          !n.type.includes('null')
        )
          throw o('SC4', { fieldName: i });
      } else
        switch (n.type) {
          case 'string':
            break;
          case 'array':
            if (!n.items || !n.items.type || n.items.type !== 'string')
              throw o('SC3', { fieldName: i });
            break;
          default:
            throw o('SC4', { fieldName: i });
        }
    var s = c.split('.').length >= 2;
    if (s && n.default) throw o('SC7', { path: c });
    if (!s) {
      if (i === '_id' && t !== '_id') throw o('COL2', { fieldName: i });
      if (i.charAt(0) === '_') {
        if (i === '_id' || i === '_deleted') return;
        throw o('SC8', { fieldName: i });
      }
    }
  }
  function a(i, n) {
    !i ||
      typeof i != 'object' ||
      Object.keys(i).forEach((c) => {
        var s = i[c];
        !i.properties &&
          s &&
          typeof s == 'object' &&
          !Array.isArray(i) &&
          r(c, s, n);
        var u = n;
        c !== 'properties' && (u = u + '.' + c), a(s, u);
      });
  }
  return a(e, ''), !0;
}
function me(e) {
  if (!e.primaryKey) throw o('SC30', { schema: e });
  function t(u) {
    if (!u) throw o('SC33', { schema: e });
    var d = u.type;
    if (!d || !['string', 'number', 'integer'].includes(d))
      throw o('SC32', { schema: e, args: { schemaPart: u } });
  }
  if (typeof e.primaryKey == 'string') {
    var r = e.primaryKey,
      a = e.properties[r];
    t(a);
  } else {
    var i = e.primaryKey,
      n = m(e, i.key);
    t(n),
      i.fields.forEach((u) => {
        var d = m(e, u);
        t(d);
      });
  }
  var c = p(e.primaryKey),
    s = e.properties[c];
  if (s.maxLength) {
    if (!isFinite(s.maxLength))
      throw o('SC41', { schema: e, args: { primaryPathSchemaPart: s } });
  } else throw o('SC39', { schema: e, args: { primaryPathSchemaPart: s } });
}
function J(e) {
  for (var t = e.split('.'), r = '', a = 0; a < t.length; a += 1)
    t[a] !== '[]'
      ? (r = r.concat('.properties.'.concat(t[a])))
      : (r = r.concat('.items'));
  return y(r);
}
function z(e) {
  if (!e.primaryKey) throw o('SC30', { schema: e });
  if (!Object.prototype.hasOwnProperty.call(e, 'properties'))
    throw o('SC29', { schema: e });
  if (e.properties._rev) throw o('SC10', { schema: e });
  if (
    !Object.prototype.hasOwnProperty.call(e, 'version') ||
    typeof e.version != 'number' ||
    e.version < 0
  )
    throw o('SC11', { version: e.version });
  if (
    (he(e),
    me(e),
    Object.keys(e.properties).forEach((t) => {
      var r = e.properties[t];
      if (t === e.primaryKey) {
        if (e.indexes && e.indexes.includes(t))
          throw o('SC13', { value: r, schema: e });
        if (r.unique) throw o('SC14', { value: r, schema: e });
        if (e.encrypted && e.encrypted.includes(t))
          throw o('SC15', { value: r, schema: e });
        if (r.type !== 'string') throw o('SC16', { value: r, schema: e });
      }
      if (b().includes(t)) throw o('SC17', { key: t, schema: e });
    }),
    e.indexes)
  ) {
    if (!f(e.indexes)) throw o('SC18', { indexes: e.indexes, schema: e });
    e.indexes.forEach((t) => {
      if (!(typeof t == 'string' || Array.isArray(t)))
        throw o('SC19', { index: t, schema: e });
      if (Array.isArray(t)) {
        for (var r = 0; r < t.length; r += 1)
          if (typeof t[r] != 'string') throw o('SC20', { index: t, schema: e });
      }
      var a = f(t) ? t : [t];
      a.forEach((i) => {
        var n = m(e, i),
          c = n.type;
        switch (c) {
          case 'string':
            var s = n.maxLength;
            if (!s) throw o('SC34', { index: t, field: i, schema: e });
            break;
          case 'number':
          case 'integer':
            var u = n.multipleOf;
            if (!u) throw o('SC35', { index: t, field: i, schema: e });
            var d = n.maximum,
              E = n.minimum;
            if (typeof d > 'u' || typeof E > 'u')
              throw o('SC37', { index: t, field: i, schema: e });
            if (!isFinite(d) || !isFinite(E))
              throw o('SC41', { index: t, field: i, schema: e });
            break;
          case 'boolean':
            var w = '',
              Q = i;
            if (i.includes('.')) {
              var L = i.split('.');
              (Q = L.pop()), (w = L.join('.'));
            }
            var T = w === '' ? e : m(e, w);
            if (!T.required || !T.required.includes(Q))
              throw o('SC38', { index: t, field: i, schema: e });
            break;
          default:
            throw o('SC36', { fieldName: i, type: n.type, schema: e });
        }
      });
    });
  }
  Object.keys(D(e))
    .map((t) => {
      var r = t.split('.');
      return r.pop(), r.join('.');
    })
    .filter((t) => t !== '')
    .filter((t, r, a) => a.indexOf(t) === r)
    .filter((t) => {
      var r = h(e, t);
      return r && !!r.index;
    })
    .forEach((t) => {
      throw (
        ((t = t.replace('properties.', '')),
        (t = t.replace(/\.properties\./g, '.')),
        o('SC26', { index: y(t), schema: e }))
      );
    }),
    (e.indexes || [])
      .reduce((t, r) => (f(r) ? _(t, r) : t.push(r), t), [])
      .filter((t, r, a) => a.indexOf(t) === r)
      .map((t) => {
        var r = J(t),
          a = h(e, r);
        if (!a || typeof a != 'object')
          throw o('SC21', { index: t, schema: e });
        return { indexPath: t, schemaObj: a };
      })
      .filter(
        (t) =>
          t.schemaObj.type !== 'string' &&
          t.schemaObj.type !== 'integer' &&
          t.schemaObj.type !== 'number' &&
          t.schemaObj.type !== 'boolean',
      )
      .forEach((t) => {
        throw o('SC22', {
          key: t.indexPath,
          type: t.schemaObj.type,
          schema: e,
        });
      }),
    Object.keys(D(e))
      .map((t) => {
        var r = t.split('.');
        return r.pop(), r.join('.');
      })
      .filter((t) => t !== '' && t !== 'attachments')
      .filter((t, r, a) => a.indexOf(t) === r)
      .filter((t) => {
        var r = h(e, t);
        return r && !!r.encrypted;
      })
      .forEach((t) => {
        throw (
          ((t = t.replace('properties.', '')),
          (t = t.replace(/\.properties\./g, '.')),
          o('SC27', { index: y(t), schema: e }))
        );
      }),
    e.encrypted &&
      e.encrypted.forEach((t) => {
        var r = J(t),
          a = h(e, r);
        if (!a || typeof a != 'object')
          throw o('SC28', { field: t, schema: e });
      });
}
function x(e) {
  e &&
    Object.entries(e).forEach(([t, r]) => {
      if (typeof t != 'string') throw l('COL14', { name: t });
      if (t.startsWith('_')) throw l('COL15', { name: t });
      if (typeof r != 'function') throw l('COL16', { name: t, type: typeof t });
      if (V().includes(t) || b().includes(t)) throw o('COL17', { name: t });
    });
}
function N(e, t) {
  var r = Object.keys(e.properties);
  t &&
    Object.keys(t)
      .filter((a) => r.includes(a))
      .forEach((a) => {
        throw o('COL18', { funName: a });
      });
}
function Y(e, t) {
  if (typeof t != 'object' || Array.isArray(t)) throw l('COL11', { schema: e });
  var r = F(e);
  if (r.length !== Object.keys(t).length)
    throw o('COL12', { have: Object.keys(t), should: r });
  return (
    r
      .map((a) => ({ v: a, s: t[a + 1] }))
      .filter((a) => typeof a.s != 'function')
      .forEach((a) => {
        throw l('COL13', { version: a.v, type: typeof a, schema: e });
      }),
    !0
  );
}
function Z(e) {
  if (G().includes(e.name)) throw o('DB5', { name: e.name });
  ee(e.name);
}
function X(e) {
  if ((ee(e.name), e.name.includes('$'))) throw o('DB13', { name: e.name });
  if (g(e.name) && (e.name.endsWith('/') || e.name.endsWith('\\')))
    throw o('DB11', { name: e.name });
}
var j = '^[a-z][_$a-z0-9\\-]*$',
  pe = new RegExp(j);
function ee(e) {
  if (typeof e != 'string' || e.length === 0) throw l('UT1', { name: e });
  if (g(e)) return !0;
  if (!e.match(pe) && e !== ':memory:')
    throw o('UT2', { regex: j, givenName: e });
  return !0;
}
function te(e) {
  var t = Object.prototype.toString.call(e.queryObj) === '[object Object]';
  if (!t)
    throw l('QU11', {
      op: e.op,
      collection: e.collection.name,
      queryObj: e.queryObj,
    });
  var r = ['selector', 'limit', 'skip', 'sort', 'index'];
  if (
    (Object.keys(e.queryObj).forEach((a) => {
      if (!r.includes(a))
        throw l('QU11', {
          op: e.op,
          collection: e.collection.name,
          queryObj: e.queryObj,
          key: a,
          args: { validKeys: r },
        });
    }),
    e.op === 'count' && (e.queryObj.limit || e.queryObj.skip))
  )
    throw o('QU15', { collection: e.collection.name, query: e.queryObj });
  v(e.queryObj);
}
function re(e) {
  var t = e.rxQuery.collection.schema.jsonSchema,
    r = e.mangoQuery.selector,
    a = Object.keys(t.properties);
  Object.keys(r)
    .filter((s) => !s.startsWith('$'))
    .filter((s) => !s.includes('.'))
    .forEach((s) => {
      if (!a.includes(s))
        throw o('QU13', { schema: t, field: s, query: e.mangoQuery });
    });
  var i = t.indexes ? t.indexes : [],
    n = e.mangoQuery.index;
  if (n) {
    var c = i.find((s) => q(s, n));
    if (!c)
      throw o('QU12', {
        collection: e.rxQuery.collection.name,
        query: e.mangoQuery,
        schema: t,
      });
  }
  if (
    e.rxQuery.op === 'count' &&
    !fe(e.rxQuery.collection.schema.jsonSchema, e.mangoQuery) &&
    !e.rxQuery.collection.database.allowSlowCount
  )
    throw o('QU14', { collection: e.rxQuery.collection, query: e.mangoQuery });
  e.mangoQuery.sort &&
    e.mangoQuery.sort
      .map((s) => Object.keys(s)[0])
      .filter((s) => !s.includes('.'))
      .forEach((s) => {
        if (!a.includes(s))
          throw o('QU13', { schema: t, field: s, query: e.mangoQuery });
      }),
    v(e.mangoQuery);
}
function fe(e, t) {
  var r = W(e, t);
  return r.queryPlan.selectorSatisfiedByIndex;
}
function v(e) {
  if (!(typeof e != 'object' || e === null)) {
    var t = Object.keys(e);
    t.forEach((r) => {
      var a = e[r];
      if (a instanceof RegExp) throw o('QU16', { field: r, query: e });
      Array.isArray(a) ? a.forEach((i) => v(i)) : v(a);
    });
  }
}
function oe(e, t) {
  if (!e) throw o('DOC20', { primaryKey: e, document: t });
  if (e !== e.trim()) throw o('DOC21', { primaryKey: e, document: t });
  if (
    e.includes('\r') ||
    e.includes(`
`)
  )
    throw o('DOC22', { primaryKey: e, document: t });
  if (e.includes('"')) throw o('DOC23', { primaryKey: e, document: t });
}
function ae(e) {
  if (typeof e != 'object' || e === null) return !1;
  for (var t in e)
    if (
      e.hasOwnProperty(t) &&
      (e[t] instanceof Date || (typeof e[t] == 'object' && ae(e[t])))
    )
      return !0;
  return !1;
}
function ne(e, t) {
  var r = p(e.schema.primaryKey),
    a = function (n) {
      (n.document = I(r, e.schema, n.document)),
        n.previous &&
          Object.keys(n.previous._meta).forEach((c) => {
            if (!Object.prototype.hasOwnProperty.call(n.document._meta, c))
              throw o('SNH', {
                dataBefore: n.previous,
                dataAfter: n.document,
                args: { metaFieldName: c },
              });
          });
      try {
        typeof structuredClone == 'function'
          ? structuredClone(n)
          : JSON.parse(JSON.stringify(n));
      } catch {
        throw o('DOC24', {
          collection: e.collectionName,
          document: n.document,
        });
      }
      if (ae(n.document))
        throw o('DOC24', {
          collection: e.collectionName,
          document: n.document,
        });
    };
  for (var i of t) a(i);
}
var ie = !1;
async function se(e) {
  if (
    !(ie || typeof window > 'u' || typeof location > 'u') &&
    !(C.premium && typeof C.premium == 'string' && (await M(C.premium)) === A)
  ) {
    ie = !0;
    var t = document.createElement('iframe');
    (t.style.visibility = 'hidden'),
      (t.width = '1px'),
      (t.height = '1px'),
      (t.style.position = 'absolute'),
      (t.style.top = '0'),
      (t.style.left = '0'),
      (t.style.opacity = '0.1'),
      (t.src = 'https://rxdb.info/html/dev-mode-iframe.html?version=' + B),
      document.body.appendChild(t);
  }
}
var ce = !0;
function ot() {
  ce = !1;
}
function ye(e) {
  return !e || typeof e == 'string' || typeof e == 'number' ? e : U(e);
}
var Ce = 'dev-mode',
  at = {
    name: Ce,
    rxdb: !0,
    init: () => {
      ce &&
        console.warn(
          [
            '-------------- RxDB dev-mode warning -------------------------------',
            'you are seeing this because you use the RxDB dev-mode plugin https://rxdb.info/dev-mode.html?console=dev-mode ',
            'This is great in development mode, because it will run many checks to ensure',
            'that you use RxDB correct. If you see this in production mode,',
            'you did something wrong because the dev-mode plugin will decrease the performance.',
            '',
            '\u{1F917} Hint: To get the most out of RxDB, check out the Premium Plugins',
            'to get access to faster storages and more professional features: https://rxdb.info/premium?console=dev-mode ',
            '',
            'You can disable this warning by calling disableWarnings() from the dev-mode plugin.',
            '---------------------------------------------------------------------',
          ].join(`
`),
        );
    },
    overwritable: {
      isDevMode() {
        return !0;
      },
      deepFreezeWhenDevMode: ye,
      tunnelErrorMessage(e) {
        if (!R[e])
          throw (
            (console.error('RxDB: Error-Code not known: ' + e),
            new Error('Error-Code ' + e + ' not known, contact the maintainer'))
          );
        return R[e];
      },
    },
    hooks: {
      preCreateRxSchema: { after: z },
      preCreateRxDatabase: {
        after: function (e) {
          X(e);
        },
      },
      createRxDatabase: {
        after: async function (e) {
          se(e.database);
        },
      },
      preCreateRxCollection: {
        after: function (e) {
          if ((Z(e), N(e.schema, e.methods), e.name.charAt(0) === '_'))
            throw o('DB2', { name: e.name });
          if (!e.schema) throw o('DB4', { name: e.name, args: e });
        },
      },
      createRxDocument: {
        before: function (e) {
          oe(e.primary, e.toJSON(!0));
        },
      },
      preCreateRxQuery: {
        after: function (e) {
          te(e);
        },
      },
      prePrepareQuery: {
        after: (e) => {
          re(e);
        },
      },
      preStorageWrite: {
        before: (e) => {
          ne(e.storageInstance, e.rows);
        },
      },
      createRxCollection: {
        after: (e) => {
          x(e.creator.statics),
            x(e.creator.methods),
            x(e.creator.attachments),
            e.creator.schema &&
              e.creator.migrationStrategies &&
              Y(e.creator.schema, e.creator.migrationStrategies);
        },
      },
    },
  };
export {
  Ce as DEV_MODE_PLUGIN_NAME,
  at as RxDBDevModePlugin,
  fe as areSelectorsSatisfiedByIndex,
  de as checkFieldNameRegex,
  re as checkMangoQuery,
  me as checkPrimaryKey,
  te as checkQuery,
  z as checkSchema,
  ye as deepFreezeWhenDevMode,
  ot as disableWarnings,
  Z as ensureCollectionNameValid,
  X as ensureDatabaseNameIsValid,
  v as ensureObjectDoesNotContainRegExp,
  ee as validateDatabaseName,
  he as validateFieldsDeep,
};
