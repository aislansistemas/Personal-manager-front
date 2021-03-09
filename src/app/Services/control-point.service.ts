import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ControlPoint } from '../Models/ControlPoint';
import { Observable } from 'rxjs';

const API = environment.ApiUrl;

@Injectable()
export class ControlPointService {

  constructor(private http: HttpClient) { }

  getControlPoints(userId: string): Observable<ControlPoint[]> {
    return this.http.get<ControlPoint[]>(`${API}ControlPoint?ApplicationUserId=${userId}`);
  }

  createControlPoint(controlPoint: ControlPoint) {
    return this.http.post<ControlPoint>(API + "ControlPoint/Create", controlPoint);
  }
}