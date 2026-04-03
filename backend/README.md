# 后端服务

## 技术栈
- 框架：Spring Boot 3.5.13
- JDK：21 LTS
- 数据库：MySQL 8.4 (暂未建设)
- 构建工具：Maven
- 核心依赖：Spring Web、Validation、Lombok、DevTools

## 项目结构

backend/
├─ src/main/java/com/campushub
│  ├─ controller/    控制层
│  ├─ service/       业务层
│  ├─ mapper/        数据访问层（预留）
│  ├─ config/        配置类
│  └─ common/        公共模块
├─ src/main/resources/
│  └─ application.yml
|— checkstyle.xml    代码规范
├─ pom.xml           Maven配置
└─ mvnw              Maven Wrapper

## 启动方式
启动主启动类
```
BackendApplication.java
```


## 版本控制
- 主分支：main
- 开发分支：dev
- 功能分支：feature/*