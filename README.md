<h1 align="center"> Projeto Angular + Spring Boot: Gerenciamento de Cursos 🎓</h1>
<p align="center">
    Este é um sistema completo de gerenciamento de cursos, desenvolvido com Angular no frontend e Spring Boot no backend.
</p>


[![Angular](https://img.shields.io/badge/Frontend-Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![Spring Boot](https://img.shields.io/badge/Backend-Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![MySQL](https://img.shields.io/badge/Database-MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)]()



## 🛠️ Tecnologias utilizadas

### **Frontend**
- **Angular**
- **Angular Material**
- **TypeScript**

### **Backend**
- **Java 17**
- **Spring Boot**
- **Spring Data JPA**
- **Lombok**

### **Banco de dados**
- **MySQL** (produção)
- **H2 Database** (testes)



## ⚙️ Configuração e execução

Cloning

How to clone your project

```bash
git clone https://github.com/sthefaniecarvalho/spring-angular-courses-api.git
```
Backend
  
- Certifique-se de ter o Java 17 e o Maven instalados.

- Configure o arquivo application.properties.

```bash
# Configuração para produção
spring.datasource.url=jdbc:mysql://localhost:3306/projeto
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha

# Configuração para testes com H2 Database
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.h2.console.enabled=true

```
- Execute o projeto

```bash
mvn spring-boot:run

```
Frontend

- Instale as dependências do Angular:

````bash
npm install
````
- Execute o projeto:

````bash
ng serve
````

## 📍 API Endpoints

Courses API (/api/courses)

| Route               | Description                                          
|---------------------|-----------------------------------------------------
| GET /api/courses    | Retorna todos os cursos
| GET /api/{id}       | Buscar um curso por id
| POST /api/courses    |  Adiciona um novo curso.
| PUT /api/courses/{id}  |  Atualiza um curso
| DELETE /api/courses/{id} | Remove um curso.




