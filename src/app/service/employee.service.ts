import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  deleteDoc,
  doc,
  setDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private firestore: Firestore = inject(Firestore);

  getEmployees(): Observable<Employee[]> {
    const employeesCollection = collection(this.firestore, 'employees');
    return collectionData(employeesCollection, { idField: 'id' }) as Observable<Employee[]>;
  }

  addEmployee(employeeData: any) {
    const employeesCollection = collection(this.firestore, 'employees');
    return addDoc(employeesCollection, employeeData);
  }
}
