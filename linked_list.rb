class Node

    attr_accessor :value, :next_node
    def initialize(value, next_node = nil)
        @value = value
        @next_node = next_node
    end
end

class LinkedList
    attr_accessor :head, :tail

    def initialize
        @head = nil
        @tail = nil
    end

    def append_first(value)
        @head = Node.new(value, @head)
    end

    def append(value)
        node = Node.new(value)
        if !@head
            @head = node
            @tail = node
            return
        end
        last_node = get_last_node()
        last_node.next_node = node
        @tail = node

    end

    def append_at_specific(value, position)
        node = Node.new(value)
        if !@head
            @head = node
            @tail = node
            return
        end 

        if position == 0
            append_first(value)
            return
        end
        previous = get_node(position - 1) || get_node
        node = Node.new(value, previous.next_node)
        previous.next_node = node
        
    end

        def get_first
            return @head.value
        end

        def remove_first
            return nil if !@head
            @head = @head.next_node
        end

        def remove_last
            return nil if !@head
            if !@head.next_node
                @head = nil
                return
            end
            prev = @head
            node = @head.next_node

            while node.next_node do
                node = node.next_node
                prev = prev.next_node
            end
           @tail = prev
            prev.next_node = nil

        end

        def remove_at_position(position)
            return nil if !@head
            if position === 0
                @head = @head.next_node
                return
            end
            prev = get_node(position-1)
            if !prev || !prev.next_node
                return
            end
            prev.next_node = prev.next_node.next_node
        end

        def clear
            @head = nil
            @tail = nil
        end

        def size
            return 0 if !@head
            node = @head
            count = 0

            while node do
                count += 1
                node = node.next_node
            end
            return count
        end

    private

    def get_last_node
       return if !@head
            
        node = @head
        until node.next_node.nil?
            node = node.next_node
        end
        return node
    end

    def get_node(position)
        return if !@head
        return @head if position === 0

        node = @head
        let i = 0
        until node.next_node.nil?
            node = node.next_node
            i += 1
            return node if i === position
        end
    end

    
end


x = LinkedList.new
x.append_first(10)

puts x.get_value