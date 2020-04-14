def merge_sort(arr)
  return arr if arr.length <= 1

  mid = arr.length / 2
  left = merge_sort(arr.take(mid))
  right = merge_sort(arr.drop(mid))

  merge(left, right)
end

def merge(arr1, arr2)
  merged = []

  while arr1.length > 0 && arr2.length > 0
    if arr1[0] > arr2[0]
      merged << arr2.shift
    else
      merged << arr1.shift
    end
  end

  merged.concat(arr1).concat(arr2)
end

p merge_sort([10, 5, 15, 2, 1, 30, 17])