def binary_search(arr, target)
  return false if arr.length == 0

  mid = arr.length / 2
  left = arr.take(mid)
  right = arr.drop(mid + 1)

  if arr[mid] > target
    return binary_search(right, target)
  elsif arr[mid] < target
    subresult = binary_search(right, target)
    return subresult == false ? false : subresult + mid + 1
  else
    return true
  end
end

p binary_search([5, 10, 12, 15, 20, 30, 70], 12) == true
p binary_search([5, 10, 12, 15, 20, 30, 70], 24) == false