import { StylusState } from './stylus';

export interface StrokeProtocol<TConfig = unknown, TState = unknown, TResult = unknown> {
  resume(config: TConfig, prevState: TState): StrokeDrawingContext<TConfig, TState, TResult>;
  down(config: TConfig, stylusState: StylusState): StrokeDrawingContext<TConfig, TState, TResult>;
}
export interface StrokeDrawingContext<TConfig = unknown, TState = unknown, TResult = unknown> {
  getConfig(): TConfig;
  getConfig<TStroke extends StrokeProtocol>(target: TStroke): ConfigOfStrokeProtocol<TStroke>;
  getState(): TState;
  getState<TStroke extends StrokeProtocol>(target: TStroke): StateOfStrokeProtocol<TStroke>;
  move(stylusState: StylusState): void;
  up(stylusState: StylusState): TResult;
}
export type StrokeDrawingContextFromProtocol<T> = T extends StrokeProtocol<
  infer TConfig,
  infer TState,
  infer TResult
>
  ? StrokeDrawingContext<TConfig, TState, TResult>
  : StrokeDrawingContext<unknown, unknown, unknown>;
export type ConfigOfStrokeProtocol<T> = T extends StrokeProtocol<infer TConfig, unknown, unknown>
  ? TConfig
  : unknown;
export type StateOfStrokeProtocol<T> = T extends StrokeProtocol<unknown, infer TState, unknown>
  ? TState
  : unknown;
export type ResultOfStrokeProtocol<T> = T extends StrokeProtocol<unknown, unknown, infer TResult>
  ? TResult
  : unknown;
