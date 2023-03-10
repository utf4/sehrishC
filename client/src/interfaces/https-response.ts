export interface HttpResponse<T> {
    data: T;
    errors?: Array<any>;
    message?: string;
    status?: boolean;
  }
