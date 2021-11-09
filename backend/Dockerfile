FROM openjdk:11-jdk-slim
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} schoolgym.jar
CMD java -jar schoolgym.jar --server.port=$PORT
