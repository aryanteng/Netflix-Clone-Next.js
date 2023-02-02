def makeFrames(input):
    orfCount = 0
    frame1 = input
    frame2 = input[1:]
    frame3 = input[2:]
    reverseFrame = ''
    for i in range(0, len(input)):
        if input[i] == 'C':
            reverseFrame += 'G'
        elif input[i] == 'G':
            reverseFrame += 'C'
        elif input[i] == 'A':
            reverseFrame += 'T'
        elif input[i] == 'T':
            reverseFrame += 'A'
    reverseInput = reverseFrame[::-1]
    frame4 = reverseInput
    frame5 = reverseInput[1:]
    frame6 = reverseInput[2:]
    orfCount = findORF(frame1) + findORF(frame2) + findORF(frame3) + findORF(frame4) + findORF(frame5) + findORF(frame6)
    return orfCount


def findORF(frame):
    orfCounter = 0
    exonFound = 0
    length = 0
    input = []
    for i in range(0, len(frame), 3):
        input.append(frame[i: i + 3])
    for j in range(0,len(input)):
        if input[j] == 'ATG':
            exonFound = 1
            length += 1
        elif input[j] == 'TAA' or input[j] == 'TAG' or input[j] == 'TGA':
            length += 1
            if exonFound == 1 and length > 2: 
            #Since the length of ORF should be greater than 2, as read through an internet source that only start and stop codon would not form an ORF and hence it would require the length to be greater than 2
                orfCounter += 1
                exonFound = 0
                length = 0
            else:
                exonFound = 0
                length = 0
        elif exonFound == 1:
            length += 1
    return orfCounter


sequence = ''
with open('./seq.txt', 'r') as file:
    seq_part = file.read().splitlines()
    for i in range (len(seq_part)):
        sequence = sequence + seq_part[i]


exonCount = makeFrames(sequence) 
print(exonCount)