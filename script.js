const projects = {
  project1: {
    client: "Hubbell Incorporated, Cleveland, OH",
    title: "AI/ML Engineer (Agentic AI, ML Focused)",
    domain: "Manufacturing",
    duration: "Aug 2024 – Present",
    tech: "Python, PySpark, Pandas, NumPy, Delta Lake, Azure Databricks, NLP, LLMs, RAG, Delta Live Tables, Unity Catalog, XGBoost, Power BI, SQL, GraphQL, Hugging Face Transformers, PyTorch, LangChain, GPT-4, GitHub, AWS Lambda, ECS, EKS, FAISS, Docker, Kubernetes, Terraform, Jenkins, Azure DevOps, Great Expectations, Boto3, AWS CloudFormation, AWS SageMaker, Keras",
    responsibilities: [
      "Translated data science prototypes into production-grade ML services using Python, TensorFlow, PyTorch, and XGBoost.",
      "Built scalable model-serving infrastructure using FastAPI with 25+ inference endpoints.",
      "Implemented batching strategies, latency optimization, and Pydantic schema validation for 100,000+ daily requests.",
      "Implemented model lifecycle tooling using AWS SageMaker Model Registry and MLflow.",
      "Designed online and offline inference pipelines using AWS SageMaker Processing and Training jobs.",
      "Implemented automated retraining triggers, blue-green deployment, and Docker/Kubernetes-based model packaging.",
      "Owned ML production health including drift detection, performance regression monitoring, rollback strategies, and CloudWatch alerts.",
      "Engineered metadata-driven ETL frameworks in PySpark and Python with schema validation using Great Expectations.",
      "Applied MLOps practices using Azure DevOps, Jenkins, Docker, and Kubernetes for automated build, test, and deployment.",
      "Architected vector database infrastructure using Pinecone and Milvus with HNSW indexing and quantization.",
      "Implemented GPU acceleration, hyperparameter tuning, feature engineering, and distributed training patterns.",
      "Ensured responsible AI and compliance using PII masking, Azure Purview, Unity Catalog, RBAC, and audit logging."
    ]
  },

  project2: {
    client: "Allstate, Chicago, IL",
    title: "Python Full-stack Developer (ML Focused)",
    domain: "Insurance",
    duration: "Sept 2022 – Jul 2024",
    tech: "Python, FastAPI, Vue.js, JavaScript, HTML5, CSS3, PySpark, Apache Kafka, BigQuery, dbt, Feast, NetworkX, spaCy, BERT, Vertex AI, Redis, Docker Swarm, GitLab CI/CD, Evidently AI, OAuth2, gRPC, Linux",
    responsibilities: [
      "Architected and developed a full-stack insurance analytics platform using Python FastAPI and Vue.js.",
      "Enabled real-time policy, claims, and underwriting insights with a microservices-driven architecture.",
      "Built RESTful and asynchronous APIs using FastAPI with OAuth2 authentication and OpenAPI standards.",
      "Supported claims processing, risk scoring, and customer policy management workflows.",
      "Designed event-driven ingestion pipelines using Apache Kafka and Apache Spark PySpark.",
      "Processed real-time telematics and claims data for risk analysis and fraud detection.",
      "Developed predictive models for claim severity and claim frequency using Gradient Boosting and CatBoost.",
      "Implemented fraud detection using NetworkX graph anomaly detection and ensemble ML techniques.",
      "Built NLP document-processing pipelines using spaCy and BERT embeddings.",
      "Automated extraction from FNOL reports, adjuster notes, and policy contracts.",
      "Deployed ML pipelines using Google Cloud Vertex AI for training, model versioning, batch prediction, and real-time prediction.",
      "Designed feature stores using Feast to reduce training-serving skew.",
      "Implemented real-time model inference using gRPC services for fraud scoring and underwriting predictions.",
      "Built data pipelines using dbt and BigQuery for analytics, reporting, and ML model consumption.",
      "Established model monitoring and drift detection using Evidently AI with automated retraining triggers.",
      "Integrated CI/CD pipelines using GitLab CI/CD and Docker Swarm.",
      "Implemented HIPAA and SOC2-aligned controls including encryption, access control, and audit logging.",
      "Optimized performance using Redis caching, asynchronous processing, and BigQuery query optimization."
    ]
  },

  project3: {
    client: "Thomson Reuters, Eagan, MN",
    title: "Python Full-stack Developer (ML Focused)",
    domain: "Finance",
    duration: "Aug 2021 – Aug 2022",
    tech: "Python, Django, Flask, AngularJS, HTML5, CSS3, JavaScript, Pandas, NumPy, Scikit-learn, AWS SageMaker, EMR, S3, Redshift, Azure Databricks, PostgreSQL, MongoDB, SQLAlchemy, Kubernetes, Jenkins, Git, Jira, PyTest, Unix/Linux",
    responsibilities: [
      "Designed frontend and backend applications using Python, Django, and AngularJS.",
      "Developed consumer-based features using Python and Django with test-driven development practices.",
      "Built Python backend services exposing REST API endpoints consumed by React and Node.js frontends.",
      "Implemented time-series forecasting models using ARIMA and Prophet for revenue projection and cash-flow optimization.",
      "Improved forecast accuracy by 18% compared to traditional statistical methods.",
      "Built document classification using TF-IDF and Naive Bayes for 100,000+ financial documents.",
      "Developed web applications and RESTful APIs using Flask, Django, Pyramid, and PHP.",
      "Developed REST APIs using Flask with JWT authentication and RBAC.",
      "Exposed 40+ endpoints for portfolio analysis, transaction processing, and customer data retrieval.",
      "Deployed ML models to production on AWS SageMaker.",
      "Built training pipelines with automated hyperparameter tuning and model registry integration.",
      "Implemented scalable model serving with multi-variant endpoints for A/B testing XGBoost vs LightGBM.",
      "Built reproducible ML pipelines with PyTest testing and Docker-based packaging.",
      "Developed fraud detection using Isolation Forest and TensorFlow/Keras autoencoders.",
      "Implemented drift monitoring on transaction-pattern distributions.",
      "Tracked precision, recall, and AUC across loan default and churn models.",
      "Collaborated with Data Engineering to design feature pipelines for customer churn prediction using Random Forest.",
      "Applied CI/CD and DevOps practices using Jenkins and Kubernetes.",
      "Implemented PCI DSS-compliant data handling, PII masking, JWT RBAC, and dependency vulnerability scanning."
    ]
  },

  project4: {
    client: "Cybage Software Pvt Limited, Hyderabad, India",
    title: "Data Engineer",
    domain: "Healthcare",
    duration: "Jan 2016 – Sept 2019",
    tech: "AWS S3, EMR, Redshift, IAM, Hadoop, Spark, PySpark, Scala, Hive, ORC, Parquet, MongoDB, HBase, Python, Pandas, NumPy, SQL, PL/SQL, Ab Initio, HL7, X12 837/835, CCD/CDA, FHIR, ICD, SNOMED, Unix/Linux",
    responsibilities: [
      "Designed and maintained large-scale ETL pipelines on AWS using S3, EMR, Hadoop/Spark, and Redshift.",
      "Processed healthcare claims, EHR/EMR data, eligibility files, encounter data, lab results, and clinical documentation.",
      "Built PySpark and Scala Spark jobs on AWS EMR for healthcare data transformation.",
      "Supported claims adjudication, quality-of-care reporting, HEDIS calculations, and risk-adjustment workflows.",
      "Developed optimized Hive tables using ORC and Parquet with partitioning and bucketing.",
      "Ingested and normalized HL7, X12 837/835 claims, CCD/CDA documents, and FHIR bundles.",
      "Designed scalable ML data pipelines using Python, Pandas, NumPy, Spark, and cloud-native workflows.",
      "Integrated MongoDB and HBase datasets into EMR pipelines.",
      "Processed clinical notes, physician narratives, radiology reports, and discharge summaries.",
      "Developed SQL and PL/SQL scripts for regulatory reports, patient risk profiles, ICD/SNOMED mappings, and utilization dashboards.",
      "Enhanced Redshift schemas and fact/dimension models for healthcare star-schema reporting.",
      "Supported production ETL workflows using Ab Initio and EMR Spark jobs.",
      "Implemented HIPAA-compliant data pipelines with PHI masking, secure S3 policies, IAM controls, and audit logging."
    ]
  },

  project5: {
    client: "Indium Software, Chennai, India",
    title: "Data Analyst",
    domain: "Retail",
    duration: "Jun 2013 – Dec 2015",
    tech: "SQL Server, Tableau, Power BI, Excel VBA, Macros, Python 3.x, R, Shell Scripting, Google Analytics, CRM Systems, Star Schema, Snowflake Schema, SSRS, Power Query, DAX",
    responsibilities: [
      "Designed and developed 50+ Tableau and Power BI dashboards for sales, marketing, and operations KPIs.",
      "Improved executive decision-making and performance visibility through interactive BI reporting.",
      "Performed data mining and analysis using SQL, Excel, Python Pandas, NumPy, and R.",
      "Generated customer segmentation and targeted marketing insights.",
      "Automated data extraction and cleansing using Python scripts and shell automation.",
      "Reduced manual reporting time by over 60%.",
      "Created and optimized dimensional data models using star and snowflake schemas.",
      "Built Excel VBA macros and advanced formulas for recurring reporting and reconciliation tasks.",
      "Developed Tableau dashboards with parameters, trend analysis, and forecasting models.",
      "Integrated data from SQL sources, CRM systems, and Google Analytics.",
      "Defined custom KPIs and DAX measures in Power BI.",
      "Enabled teams to monitor conversion rates, churn, and product performance in real time.",
      "Collaborated with business users to document reporting requirements and validate data accuracy.",
      "Conducted A/B testing and statistical analysis in R and Python for marketing campaign performance."
    ]
  }
};

function openProject(projectId) {
  const project = projects[projectId];

  document.getElementById("modal-title").innerText = project.title;
  document.getElementById("modal-domain").innerText =
    `${project.client} | Domain: ${project.domain} | ${project.duration}`;

  document.getElementById("modal-tech").innerText =
    `Environment: ${project.tech}`;

  const list = document.getElementById("modal-list");
  list.innerHTML = "";

  project.responsibilities.forEach(function (item) {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });

  document.getElementById("modal").style.display = "block";
}

function closeProject() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("modal");

  if (event.target === modal) {
    closeProject();
  }
};

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeProject();
  }
});
