export type Service<T> = () => Promise<{
  status: number;
  data: T | null;
  message: string;
}>;
export type ServiceWithProps<T, Props> = (
  props: Props,
) => Promise<{
  status: number;
  data: T | null;
  message: string;
}>;