\# LeaveHub Terraform Infrastructure



Infrastructure as Code configuration for the CloudOps LeaveHub project.



\## AWS Resources



Terraform provisions:



\- AWS EC2 instance

\- Ubuntu 24.04 AMI

\- EC2 Security Group

\- Docker installation through EC2 user data

\- Default AWS VPC integration



\## Terraform Commands



```bash

terraform init

terraform validate

terraform plan

terraform apply

terraform destroy

