#Data Visualization
#Call libraries
##Topics covered
#1) Boxplot
#2) Scatterplot
#3) Correlation plot
#4) Density plot
#5) Histplot
#6) qqplot
library(dplyr)
library(ggplot2)
#Call data
data = iris
##Use help function to get idea about a information regarding
##function or data
#Basic data information
class(data)
nrow(data)
ncol(data)
#Information regarding features of data
str(data)
#Box plot
#Single boxplot
boxplot(data$Sepal.Length,xlab='Sepal_length',
        ylab='Sepal_length_val',main='Sepal Length boxplot')
##Boxplot of two columns
boxplot(data[,c(1,2)],ylab='Length',main='Boxplot')
##Multiple Boxplots
boxplot(data[,c(1:4)],ylab='Length',main='Boxplot')
##Frequency Plot
plot(data$Species,ylab = 'Frequency',main='Frequency graph of Species')
###Scatter plot
##Single scatter plot
plot(data$Sepal.Length,data$Sepal.Width,xlab=
       'Sepal_length',ylab='Sepal_width',main=
       'Scatterplot for Sepal length v/s Sepal Width')
##Multiple scatterplot
pairs(data[,1:4])
##All possible plots
pairs(iris[1:4], main = "Scatter plot",col=iris$Species,cex=0.4)
##Explore cex, pch functions
install.packages('PerformanceAnalytics')
library(PerformanceAnalytics)
chart.Correlation(iris[,1:4], histogram = TRUE, method = "pearson")
# *** mean level of significance. * means 10% level of significance,
# **means 5% and 10% mean 1%. *** most statistically significant 
## then ** and then *. Refer to p value and FDR
##Correlation matrix
cor(data[,1:4])
library(psych)
corPlot(data[,1:4], cex = 1.2)
library(corrplot)
# install.packages("corrplot")
library(corrplot)
corrplot(cor(data[,1:4]),        # Correlation matrix
         method = "shade", # Correlation plot method
         type = "full",    # Correlation plot style (also "upper" and "lower")
         diag = TRUE,      # If TRUE (default), adds the diagonal
         tl.col = "black", # Labels color
         bg = "white",     # Background color
         title = "",       # Main title
         col = NULL)       # Color palette
###Histogram
hist(data$Sepal.Length,xlab='Sepal_length',
     ylab='Frequency',main='Histogram of Sepal length')
##Plot multiple figures in a single plot
par(mfrow=c(2,2),pty='s')
hist(data$Sepal.Width,xlab='Sepal_Width',
     ylab='Frequency',main='Histogram of Sepal length')
hist(data$Petal.Length,xlab='Petal_length',
     ylab='Frequency',main='Histogram of Sepal length')
hist(data$Petal.Width,xlab='Petal_Width',
     ylab='Frequency',main='Histogram of Sepal length')
hist(data$Sepal.Length,xlab='Sepal_length',
     ylab='Frequency',main='Histogram of Sepal length')
##Density Plot
dev.off()
##Plot all four density plots
par(mfrow=c(2,2),pty='s')
plot(density(data$Sepal.Length),main='Sepal_length')
plot(density(data$Sepal.Width),main='Sepal_width')
plot(density(data$Petal.Length),main='Petal_Length')
plot(density(data$Petal.Width),main='Petal_width')
dev.off()
##QQ plot
qqnorm(data$Sepal.Length)
qqline(data$Sepal.Length)
