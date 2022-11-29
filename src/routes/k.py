import cv2
import keras
cap = cv2.VideoCapture(0)   # 0: default camera
#cap = cv2.VideoCapture("test.mp4") #동영상 파일에서 읽기
 
while cap.isOpened():
    # 카메라 프레임 읽기
    success, frame = cap.read()
    if success:
        # 프레임 출력
        cv2.imshow('Camera Window', frame)
 
        # ESC를 누르면 종료
        key = cv2.waitKey(1) & 0xFF
        if (key == 27): 
            break
 
cap.release()
cv2.destroyAllWindows()






# import time # time 라이브러리 import

# start = time.time() # 시작
 
# time.sleep(1) # 측정하고자 하는 코드 부분
 


# # def fibonacci(n):
# #     if n == 0 or n == 1:
# #         return n
# #     return fibonacci(n-2) + fibonacci(n-1)

# # print(fibonacci(30))
# def fibonacci(n):
#     fibo = [1, 1]
#     if n == 1 or n == 2:
#         return fibo[n-1]
#     for i in range(2,n):
#         fibo.append(fibo[i-2] + fibo[i-1])

#     return fibo[n-1]

# print(fibonacci(2))
# print(fibonacci)
# print(f"{time.time()-start:.4f} sec") # 종료와 함께 수행시간 출력