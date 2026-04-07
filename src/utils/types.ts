export type ServiceWithProps<T> = () => {
  message: string;
  status: number;
  data?: T;
}