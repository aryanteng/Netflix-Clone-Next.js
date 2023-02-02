dict = {
  "TTT":"phe",
  "TTC":"phe",
  "TTA":"leu",
  "TTG":"leu",
  "CTT":"leu",
  "CTC":"leu",
  "CTA":"leu",
  "CTG":"leu",
  "ATT":"ile",
  "ATC":"ile",
  "ATA":"ile",
  "ATG":"met",
  "GTT":"val",
  "GTC":"val",
  "GTA":"val",
  "GTG":"val",
  "TCT":"ser",
  "TCC":"ser",
  "TCA":"ser",
  "TCG":"ser",
  "CCT":"pro",
  "CCC":"pro",
  "CCA":"pro",
  "CCG":"pro",
  "ACT":"thr",
  "ACC":"thr",
  "ACA":"thr",
  "ACG":"thr",
  "GCT":"ala",
  "GCC":"ala",
  "GCA":"ala",
  "GCG":"ala",
  "TAT":"tvr",
  "TAC":"tvr",
  "TAA":"STOP",
  "TAG":"STOP",
  "CAT":"his",
  "CAA":"his",
  "CAC":"gln",
  "CAG":"gln",
  "AAT":"asn",
  "AAC":"asn",
  "AAA":"lys",
  "AAG":"lys",
  "GAT":"asp",
  "GAC":"asp",
  "GAA":"glu",
  "GAG":"glu",
  "TGT":"cys",
  "TGC":"cys",
  "TGA":"STOP",
  "TGG":"trp",
  "CGT":"arg",
  "CGC":"arg",
  "CGA":"arg",
  "CGG":"arg",
  "AGT":"ser",
  "AGC":"ser",
  "AGA":"arg",
  "AGG":"arg",
  "GGT":"gly",
  "GGC":"gly",
  "GGA":"gly",
  "GGG":"gly"
}

sequence = ""
with open('./sequence.txt', 'r') as file:
    seq_part = file.read().splitlines()
    for i in range (len(seq_part)):
        sequence = sequence + seq_part[i]
        
input = []
for i in range(0, len(sequence), 3):
  input.append(sequence[i: i + 3])

protein = ''
for i in range(0,len(input)):
  if input[i] in dict:
    protein += dict[input[i]]

print(protein)