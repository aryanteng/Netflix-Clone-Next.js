###Load data
data(iris)
#Rename data
data = iris
#Class of data
class(data)
#View the data
##Follow the thumb of rule to alwaays view only head,
##tail, or a small subset of data only for big data
View(data)
##Dimension of data
dim(data)
#No. of rows of data
nrow(data)
#No. of columns of data
ncol(data)
##Row name of data
rownames(data)
##Colnames of data
colnames(data)
##Print all commands worked in working directory
history()
#Use $ to acces column of data
data$Sepal.Length
data$Species
data$Petal.Width
#Call library for data analysis purpose
library(dplyr)
##Applying filter condition
filter(data,data$Petal.Width>0.3)
#COunt the frequency of each category
table(data$Species)
##Subset all data of setosa category
(filter(data,data$Species=='setosa'))
##Applying multiple condition in filtering
filter(data,data$Species=='setosa' | data$Species=='virginica')
(filter(data,data$Sepal.Width>3.5 & data$Petal.Width>0.4))
#Adding a extra column
data = (mutate(data,sum_sw_pw=data$Sepal.Length + data$Petal.Width))
##Accesing the data using column number 
View(data[,c(1,2,3)])
View(data[,c(1,3,2)])
View(data[,c(1,2,3,4,6,5)])
colnames(data)
##Change the order of columns
View(data[,c(1,2,3,4,6,5)])
##Indexing the data
data[1:10,1:2] # before comma row and after comma column
data[10:20,6]
data = (data[,c(1,2,3,4,6,5)])
data[10:20,6]
##Histogram
hist(data$Sepal.Width)
#Calculating density of a column
density(data$Sepal.Length)
##Density plot of a column
plot(density(data$Sepal.Length))
##Scatterplot
plot(data$Sepal.Length,data$Petal.Length)
plot(data$Sepal.Length,data$Petal.Length)
library(ggplot2)
##Creating a object for ploting
obj = data %>% ggplot(aes(x=Sepal.Width,y=Petal.Width))
##Add the type of plot to be used 
obj+geom_point()
data %>% ggplot(aes(x=Sepal.Width,y=Petal.Width)) + geom_point()
##Use col element to color acc to some column wise
data %>% ggplot(aes(x=Sepal.Width,y=Petal.Width,col=Species)) + geom_point()
##
data %>% ggplot(aes(x=Sepal.Width,y=Petal.Width)) + geom_point()
data %>% ggplot(aes(x=Sepal.Width,y=Petal.Width,col=Species)) + geom_point()
##Try to observe the clusters 
data %>% ggplot(aes(x=Petal.Length,y=Petal.Width)) + geom_point()
data %>% ggplot(aes(x=Petal.Length,y=Petal.Width,col=Species)) + geom_point()
##FInd the correlation b/w two features
cor(data$Petal.Length,data$Petal.Width)
## Creating a dataframe
#Create 3 vectors
a = c(seq(1,10,2))
b = c(seq(2,11,2))
c = c(seq(3,12,2))
##COmbine all vec column wise
mat = cbind(a,b,c)
#Using paste function to create row names
row_names = paste(rep('Row',6),1:6)
##Using paste function to create column names
col_names = paste(rep('col',3),1:3)
##Give row and column names
rownames(mat) = row_names
colnames(mat) = col_names
#Converting matrix to data frame
mat = as.data.frame(mat)
##Accesing the data frame using $
mat$a
mat$b
mat$c
###Calling library Mixomics
library(mixOmics)
#Calling data from mixomics packages
data("breast.TCGA")
data = breast.TCGA
#check class of data
class(data)
##Fetching data
mrna = data$data.train$mrna
class(mrna)
#Converting matrix data to data frame
mrna = as.data.frame(mrna)
#view the data
View(mrna)
dim(mrna)
hist(mrna$RTN2)
boxplot(mrna$RTN2)











