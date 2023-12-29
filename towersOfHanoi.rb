def move(start, goal)
    intermediate =  ([1, 2, 3] - [start, goal]).first
    result = move_text(start, intermediate) + " " + move_text(start, goal) + " " + move_text(intermediate, goal)

    result
    end

    private

    def move_text(from, to)
        "#{from}->#{to}"
    end


puts move(1, 3)


