def search(nums, target)
    return -1 if nums.empty?
    mid = nums.length / 2 - 1
    arr1 = nums.take(mid)
    arr2 = nums.drop(mid)
    p "nums: #{nums}"
    p "mid: #{mid}"
    if nums[mid] == target
         return mid
    elsif nums.length == 1
         return -1
    elsif nums[mid+1] > target && nums[mid] > target
         return mid + 1 + search(arr1, target)
    else
         search(arr2, target)
    end
end

search([4,5,6,7,0,1,2], 3)