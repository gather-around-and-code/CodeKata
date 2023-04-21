defmodule BowlingElixirTest do
  use ExUnit.Case
  import BowlingElixir

  test "Strike?" do
    pins = 10
    frame_count = 1
    assert strike?(%{pins: pins, frame_count: frame_count}) == "X"
  end
end
