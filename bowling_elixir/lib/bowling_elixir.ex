defmodule BowlingElixir do
  def game_start() do
  end

  def game do
    %{total_score: 0}
  end

  def frames do
    [frame_number: 1, pins: 0, throw_count: 1, is_strike: false, is_spare: false, describe: ""]
  end

  def create_frame do
    frames = []
    frame = frames()

    for n <- 1..10 do
      frames ++ frame
    end
  end

  def strike?(%{pins: pins, frame_count: fc}) when pins == 10 and fc == 1 do
    "X"
  end
end
