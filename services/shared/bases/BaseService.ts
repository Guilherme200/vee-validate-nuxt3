import {ResponseType} from "~/services/shared/types/ResponseType";

export abstract class BaseService {
  private readonly fetch: any
  public response: ResponseType

  protected constructor(protected url: string) {
    this.url = url;
    this.fetch = useNuxtApp().$httpClient;
    this.response = {status: 200, data: null, error: null}
  }

  async index(params?: object): Promise<any> {
    await this.fetch.get(this.url, {params})
      .then((resp: any) => this.response.data = resp)
      .catch((err: any) => this.response.error = err);

    return this.response;
  }

  async get(id: string): Promise<any> {
    await this.fetch.get(`${this.url}/${id}`)
      .then((resp: any) => this.response.data = resp)
      .catch((err: any) => this.response.error = err);

    return this.response;
  }

  async create(formData: any): Promise<ResponseType> {
    await this.fetch.post(this.url, formData)
      .then((resp: any) => this.response.data = resp)
      .catch((err: any) => this.response.error = err);

    return this.response;
  }

  async update(id: string, formData: any): Promise<any> {
    await this.fetch.put(`${this.url}/${id}`, formData)
      .then((resp: any) => this.response.data = resp)
      .catch((err: any) => this.response.error = err);

    return this.response;
  }

  async delete(id: string): Promise<any> {
    await this.fetch.delete(`${this.url}/${id}`)
      .then((resp: any) => this.response.data = resp)
      .catch((err: any) => this.response.error = err);

    return this.response;
  }
}
