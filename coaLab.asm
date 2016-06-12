.MODEL SMALL
.STACK 100H 
.DATA
MSG1 DB 'INPUT C: $' 
MSG2 DB '(4A-3B)-(C-2B)=$'  
A DB 3
B DB 1
C DB ?
.CODE
MAIN PROC  
    MOV AX,@DATA
    MOV DS,AX
    
    LEA DX,MSG1
    MOV AH,9
    INT 21H 
    
    MOV AH,1
    INT 21H
    MOV C,AL
    
    ADD A,48
    ADD B,48
    
    MOV BL,A
    ADD A,BL
    SUB A,48 
    ADD A,BL 
    SUB A,48 
    ADD A,BL 
    SUB A,48
    
    
    MOV BL,B
    ADD BL,B 
    SUB BL,48 
    ADD BL,B
    SUB BL,48  
    
    
    MOV CL,B
    ADD B,CL
    SUB B,48    
    
    SUB A,BL
    ADD A,48 
    
    MOV CL,C
    SUB A,CL
    ADD A,48 
    
    MOV BL,B
    ADD A,BL
    SUB A,48
    
    MOV AH,2
    MOV DL,0DH
    INT 21H
    MOV DL,0AH
    INT 21H 
    
    LEA DX,MSG2
    MOV AH,9
    INT 21H
     
    
    MOV AH,2
    MOV DL,A
    INT 21H
    
          
           
    MOV AH,4CH
    INT 21H
    MAIN ENDP
END MAIN

