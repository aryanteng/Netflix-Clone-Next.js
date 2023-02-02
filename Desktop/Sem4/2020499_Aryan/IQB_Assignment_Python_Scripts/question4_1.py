# sequences
seq_1 = "ATCAGAGTA"
seq_2 = "TTCAGTA"
# penalties
match = 2
mismatch = -1
gap = -2

rows = len(seq_1)+1
cols = len(seq_2)+1
arr = []

# forming the arr and filling it with 0s
for r in range(0, rows):
        arr.append([0 for c in range(0, cols)])

# adding the gap penalties in the first row and column
for i in range(1, len(seq_1)+1):
    arr[i][0] = arr[i - 1][0] + gap
for i in range(1, len(seq_2)+1):
    arr[0][i] = arr[0][i-1] + gap

# traversing the array looking for matches and adding the score to the element accordingly
for i in range(1, len(seq_1)+1):
    for j in range(1, len(seq_2)+1):
        if seq_1[i - 1] == seq_2[j - 1]:
            diagonalScore = arr[i - 1][j - 1] + match
            arr[i][j] = diagonalScore
        else:
            diagonalScore = arr[i - 1][j - 1] + mismatch
            leftScore = arr[i][j - 1] + gap
            upScore = arr[i - 1][j] + gap
            arr[i][j] = max(diagonalScore, leftScore, upScore)

# now we create a function for finding all optimal alignments
def optAlignment(stringLeft, stringUp, arr, i, j):
    if i == 1 and j == 1:
        stringUp += seq_2[j-1]
        stringLeft += seq_2[j-1]
        if '-' in stringUp:
            print('[' + stringUp[::-1] + ']' + ',' + ' Score:' + str(maxScore))
        if '-' in stringLeft:
            print('[' + stringLeft[::-1] + ']' + ',' + ' Score:' + str(maxScore))
            
    # value of element at row i and column j
    element = arr[i][j]
    # the score of gap penalty
    gap_penalty = element - gap
    
    if seq_2[j-1] == seq_1[i-1]:
        optAlignment(stringLeft+seq_2[j-1], stringUp+seq_1[i-1], arr, i-1, j-1)
        if gap_penalty == arr[i-1][j]:
            stringUp += '-'
            optAlignment(stringLeft, stringUp, arr, i-1, j)
        
        if gap_penalty == arr[i][j-1]:
            stringLeft += '-'
            optAlignment(stringLeft, stringUp, arr, i, j-1) 
        
    else:
        if gap_penalty == arr[i-1][j]:
            stringUp += '-'
            optAlignment(stringLeft, stringUp, arr, i-1, j)
            
        if gap_penalty == arr[i][j-1]:
            stringLeft += '-'
            optAlignment(stringLeft, stringUp, arr, i, j-1)  
    
    

print('The bi-dimensional array obtained is: ', '\n', arr)
maxScore = arr[rows-1][cols-1]
stringOne = ''
stringTwo = ''
optAlignment(stringOne, stringTwo, arr, rows-1, cols-1)