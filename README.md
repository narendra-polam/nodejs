# NodeJS-DEV"   

# Clone project from Git Hub
**step1**: *Clone project* :: 

    git clone https://github.com/narendra-polam/nodejs.git
Note: Before run this command install Nodejs and git in your local.  
  
**step2**: *Go To Project directory*  

    cd nodejs 
  
  # Project Run in Docker
**step1** :  Build Docker Container

       docker build -t narendra .

Note: Here `narendra` is container name.  

**step2**:  Run Docker Image

     docker run -p 4545:8080 --name mynodejs -d narendra 
Note: Here `mynodejs` is docker image name. Code repo exposed to `4545` port
  
**step3**:  Check logs

    docker logs -f mynodejs