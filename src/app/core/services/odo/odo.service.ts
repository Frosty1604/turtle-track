import { inject, Injectable } from '@angular/core';
import { DatabaseService } from '../database/database.service';
import { RxDocument } from 'rxdb';
import { OdoDocType } from '../../schema/odo.model';
import { MangoQuerySortDirection } from 'rxdb/dist/types/types/rx-query';

@Injectable()
export class OdoService {
  readonly #db = inject(DatabaseService).db;

  insert(odoMeter: number): Promise<RxDocument<OdoDocType>> {
    return this.#db.odo.insert({
      id: crypto.randomUUID(),
      odo: odoMeter,
      dateTime: new Date().toISOString(),
    });
  }

  findAll = (sort: MangoQuerySortDirection = 'asc') =>
    this.#db.odo.find({ sort: [{ odo: sort }] }).$;

  findMax = () => this.#db.odo.findOne({ sort: [{ odo: 'desc' }] }).$;
}
