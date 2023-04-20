defmodule BowlingElixirTest do
  use ExUnit.Case
  doctest BowlingElixir

  test "greets the world" do
    assert BowlingElixir.hello() == :world
  end
end
