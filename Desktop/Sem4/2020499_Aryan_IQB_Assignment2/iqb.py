dict = {
    "W" : {
        "P(H)" : 1.14,
        "P(S)" : 1.19
    },
    "H" : {
        "P(H)" : 1.24,
        "P(S)" : 0.71
    },
    "G" : {
        "P(H)" : 0.53,
        "P(S)" : 0.81
    },
    "C" : {
        "P(H)" : 0.77,
        "P(S)" : 1.30
    },
    "I" : {
        "P(H)" : 1.0,
        "P(S)" : 1.60
    },
    "T" : {
        "P(H)" : 0.82,
        "P(S)" : 1.20
    },
    "V" : {
        "P(H)" : 1.14,
        "P(S)" : 1.65
    },
    "Y" : {
        "P(H)" : 0.61,
        "P(S)" : 1.29
    },
    "M" : {
        "P(H)" : 1.20,
        "P(S)" : 1.17
    },
    "E": {
        "P(H)": 1.53,
        "P(S)": 0.26
    },
    "A": {
        "P(H)": 1.45,
        "P(S)": 0.97
    },
    "L": {
        "P(H)": 1.34,
        "P(S)": 1.22
    },
    "Q": {
        "P(H)": 1.17,
        "P(S)": 1.23
    },
    "F": {
        "P(H)": 1.12,
        "P(S)": 1.28
    },
    "K": {
        "P(H)": 1.07,
        "P(S)": 0.74
    },
    "D": {
        "P(H)": 0.98,
        "P(S)": 0.80
    },
    "S": {
        "P(H)": 0.79,
        "P(S)": 0.72
    },
    "R": {
        "P(H)": 0.79,
        "P(S)": 0.90
    },
    "N": {
        "P(H)": 0.73,
        "P(S)": 0.65
    },
    "P": {
        "P(H)": 0.59,
        "P(S)": 0.62
    },
}  

inputSeq = "SGFRKMAFPSGKVEGCMVQVTCGTTTLNGLWLDDTVYCPRHVICTAEDMLNPNYEDLLIRKSNHSFLVQAGNVQLRVIGHSMQNCLLRLKVDTSNPKTPKYKFVRIQPGQTFSVLACYNGSPSGVYQCAMRPNHTIKGSFLNGSCGSVGF"

# PREDICTING HELICES
windowSize = 6
arr = []
for i in range(0, len(inputSeq)):
    subString = ''
    if(i + windowSize <= len(inputSeq)):
        for j in range(0, windowSize):
            subString += inputSeq[i+j]
        if len(subString) == windowSize:
            arr.append(subString)
helixArr = []
helixIndices = []
for i in range(0, len(arr)):
    score = 0;
    for j in range(0, len(arr[i])):
        if(arr[i][j] in dict):
            value = dict[arr[i][j]]["P(H)"]
            if value >= 1:
                score += 1
    if score >= 4:
        helixArr.append(arr[i])
        helixIndices.append(inputSeq.index(arr[i]))

# PREDICTING STRAND
windowSize2 = 5
arr2 = []
for i in range(0, len(inputSeq)):
    subString = ''
    if(i + windowSize2 <= len(inputSeq)):
        for j in range(0, windowSize2):
            subString += inputSeq[i+j]
        if len(subString) == windowSize2:
            arr2.append(subString)
strandArr = []
strandIndices = []
for i in range(0, len(arr2)):
    score = 0;
    for j in range(0, len(arr2[i])):
        if(arr2[i][j] in dict):
            value = dict[arr2[i][j]]["P(S)"]
            if value >= 1:
                score += 1
    if score >= 3:
        strandArr.append(arr2[i])
        strandIndices.append(inputSeq.index(arr2[i]))

# LEFT TRAVERSAL FOR HELICES
for i in range(0, len(helixIndices)):
    flag = False;
    tag = helixIndices[i];
    while flag == False:
        if tag >= 1:
            input = inputSeq[tag:tag+windowSize]
            input = inputSeq[tag-1] + input
            input = input[0:4]
            score = 0;
            for k in range(0, len(input)):
                if input[k] in dict:
                    score += dict[input[k]]["P(H)"]
            if score >= 4:
                helixArr[i] = input[0] + helixArr[i]
                tag = tag - 1
            elif score < 4:
                flag = True
        else:
            flag = True


# RIGHT TRAVERSAL FOR HELICES
for i in range(0, len(helixIndices)):
    flag = False;
    tag = helixIndices[i];
    while flag == False:
        if tag < len(inputSeq):
            input = inputSeq[tag:tag+windowSize]
            if len(input)+tag < len(inputSeq):
                input = input + inputSeq[len(input)+tag]
            else:
                break
            input = input[-4:]
            score = 0;
            for k in range(0, len(input)):
                if input[k] in dict:
                    score += dict[input[k]]["P(H)"]
            if score >= 4:
                if len(helixArr[i] + input[len(input)-1]) <= len(inputSeq) and tag + windowSize < len(inputSeq):
                    helixArr[i] = helixArr[i] + input[len(input)-1]
                    tag = tag + 1
            elif score < 4:
                flag = True
        else:
            flag = True

# LEFT TRAVERSAL FOR STRANDS
for i in range(0, len(strandIndices)):
    flag = False;
    tag = strandIndices[i];
    while flag == False:
        if tag >= 1:
            input = inputSeq[tag:tag+windowSize2]
            input = inputSeq[tag-1] + input
            input = input[0:4]
            score = 0;
            for k in range(0, len(input)):
                if input[k] in dict:
                    score += dict[input[k]]["P(S)"]
            if score >= 4:
                strandArr[i] = input[0] + strandArr[i]
                tag = tag - 1
            elif score < 4:
                flag = True
        else:
            flag = True

#RIGHT TRAVERSAL FOR STRANDS
for i in range(0, len(strandIndices)):
    flag = False;
    tag = strandIndices[i];
    while flag == False:
        if tag < len(inputSeq):
            input = inputSeq[tag:tag+windowSize2]
            if len(input)+tag < len(inputSeq):
                input = input + inputSeq[len(input)+tag]
            else:
                break
            input = input[-4:]
            score = 0;
            for k in range(0, len(input)):
                if input[k] in dict:
                    score += dict[input[k]]["P(S)"]
            if score >= 4:
                if len(strandArr[i] + input[len(input)-1]) <= len(inputSeq) and tag + windowSize2 < len(inputSeq):
                    strandArr[i] = strandArr[i] + input[len(input)-1]
                    tag = tag + 1
            elif score < 4:
                flag = True
        else:
            flag = True


allHelixIndices = list(inputSeq)
allStrandIndices = list(inputSeq)

# CREATING STRING FOR HELIX IDENTIFICATION
for i in range(0, len(helixArr)):
    helix = inputSeq.index(helixArr[i])
    length = len(helixArr[i])
    for j in range(helix, helix+length):
        allHelixIndices[j] = "1"
        
for j in range(0, len(inputSeq)):
    if allHelixIndices[j] != "1":
        allHelixIndices[j] = '-' 
    else:
         allHelixIndices[j] = 'H' 

allHelixString = "".join(allHelixIndices)

# CREATING STRING FOR STRAND IDENTIFICATION
for i in range(0, len(strandArr)):
    strand = inputSeq.index(strandArr[i])
    length = len(strandArr[i])
    for j in range(strand, strand+length):
        allStrandIndices[j] = "1"
        
for j in range(0, len(inputSeq)):
    if allStrandIndices[j] != "1":
        allStrandIndices[j] = '-' 
    else:
         allStrandIndices[j] = 'E' 

allStrandString = "".join(allStrandIndices)
hScore = 0
common = list(inputSeq)
for i in range(0, len(allHelixIndices)):
    if allHelixIndices[i] == "H":
        hScore += dict[inputSeq[i]]["P(H)"]

sScore = 0
for i in range(0, len(allStrandIndices)):
    if allStrandIndices[i] == "E" and allHelixIndices[i] == "H":
        sScore += dict[inputSeq[i]]["P(S)"]

# CREATING A COMMON STRING WITH H, S AND BLANKSPACE and CALCULATING THE SCORES OF HELIXES AND STRSNDS WHERE H AND E APPEAR AT THGE SAME INDEX
common = list(inputSeq)
for i in range(0, len(inputSeq)):
    if allHelixString[i] == "-" and allStrandString[i] == "-":
        common[i] = " "
    elif allHelixString[i] == "H" and allStrandString[i] == "-":
        common[i] = "H"
    elif allHelixString[i] == "-" and allStrandString[i] == "E":
        common[i] = "S"
    elif allHelixString[i] == "H" and allStrandString[i] == "E":
        flag = False
        hSum = 0
        eSum = 0
        count = i
        while flag == False:
            if allHelixString[count] == "H" and allStrandString[count] == "E" and count < len(inputSeq):
                if inputSeq[count] in dict:
                    hSum += dict[inputSeq[count]]["P(H)"]
                    eSum += dict[inputSeq[count]]["P(S)"]
                    count += 1
            else:
                flag = True
        if(hSum > eSum):
            for x in range(i, count+1):
                common[x] = "H"
        elif(hSum < eSum):
            for x in range(i, count+1):
                common[x] = "S"

commonString = "".join(common)
x = 0
print('\n')
print("1    ", inputSeq[0:50], "    50")
print("     ",commonString[0:50])
print('\n')
print("51   ", inputSeq[50:100], "    100")
print("     ",commonString[50:100])
print('\n')
print("101  ", inputSeq[100:150], "    150")
print("     ",commonString[100:150])
print('\n')


# Question 2 Part (a). Code for mentioning the differences in both the sequences per index.
print('Differences in the sequences:')
for i in range(0, len(inputSeq)):
    print("Index", i+1, ": ", inputSeq[i], " - ", common[i])