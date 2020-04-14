def quick_sort(arr)
  return arr if arr.length <= 1

  pivot = arr.shift
  left = arr.select { |el| el < pivot }
  right = arr.select { |el| el >= pivot }

  left_sorted = quick_sort(left)
  right_sorted = quick_sort(right)

  left_sorted.concat([pivot]).concat(right_sorted)
end

p quick_sort([10, 5, 15, 2, 1, 30, 17])