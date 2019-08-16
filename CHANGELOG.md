1.1.1
-
### **Base version with**

- Automated bot functions
- Command handling
- Reaction handling
- Message awaiting

1.1.2
-
### **New developer-favoring features**

- User blacklisting

### **New handling features**

- There's now a post-handle function for react commands

### **Quality of life**

- Capitalization of command names and aliases while defining or calling no longer matters
- Command aliases will now automatically turn into an array
- Normalized handler returns to be more consistent
- When a minor error occurs sending the response such as a non-existent channel or missing permissions, the response will be an error instance with the reason in the message