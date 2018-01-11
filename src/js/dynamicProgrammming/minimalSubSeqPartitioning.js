/*
 You are working on developing a movie with video and want to devise an application to easily break up individual shots in a video into scenes.
 There is already an algorithm that breaks the video up into shots (short sequences from a particular camera angle) and labels them.

 Write a function which will partition a sequence of labels into minimal subsequences so that no labels appear in more than one subsequence.
 The output should be the length of each subsequence.

 Input:
 The input to the function/method consists of an argument - inputList, a list of characters representing the sequence of shots.

 Output:
 Return a list of integers representing the length of each scene, in the order in which it appears in the given sequence of shots.

 Example:
 input: [a,b,c]
 output: [1,1,1]
 Input:
 inputList = [a,b,a,b,c,b,a,c,a,d,e,f,e,g,d,e,h,i,j,h,k,l,i,j]
 Output:
 [9, 7, 8]
 Explanation:
 The correct partitioning is:
 a,b,a,b,c,b,a,c,a,/d,e,f,e,g,d,e,/h,i,j,h,k,l,i,j
 To ensure that no label appears in more than one subsequence, subsequences are as small as possible, and subsequences partition the sequence.
 The length of these subsequences are 9, 7 and 8.
 */