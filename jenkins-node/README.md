<div align="center">
    <img src="https://dojo.qaninja.com.br/upload/others/181220201608333711logo-site.png" width="300">
    <h1>DevOps for Testers com Jenkins e Node.js</h1>
</div>

### DevOps for Testers com Jenkins e Node.js

1. Jenkins com Docker
2. O que são Pipelines?
3. Trabalhando com Repositório Git
4. Pipeline Script from SCM
5. Customizando o Agente de execução com Dockerfile	
6. Mastigando relatórios de testes
7. Trabalhando com diretiva post
8. Screenshots quando o teste falha
9. Devorando Screenshots
10. Atacando os testes de regressão

> Erro apresentado em aproveitar o projeto em subdiretórios do github. Será feito conforme orientação do curso um repositório exclusivo para o Jenkins. 
~~~
Started by user devops
hudson.plugins.git.GitException: Command "git fetch --tags --force --progress --prune -- origin +refs/heads/master:refs/remotes/origin/master" returned status code 128:
stdout: 
stderr: fatal: couldn't find remote ref refs/heads/master

	at org.jenkinsci.plugins.gitclient.CliGitAPIImpl.launchCommandIn(CliGitAPIImpl.java:2450)
	at org.jenkinsci.plugins.gitclient.CliGitAPIImpl.launchCommandWithCredentials(CliGitAPIImpl.java:2051)
	at org.jenkinsci.plugins.gitclient.CliGitAPIImpl.access$500(CliGitAPIImpl.java:84)
	at org.jenkinsci.plugins.gitclient.CliGitAPIImpl$1.execute(CliGitAPIImpl.java:573)
	at jenkins.plugins.git.GitSCMFileSystem$BuilderImpl.build(GitSCMFileSystem.java:365)
	at jenkins.scm.api.SCMFileSystem.of(SCMFileSystem.java:197)
	at jenkins.scm.api.SCMFileSystem.of(SCMFileSystem.java:173)
	at org.jenkinsci.plugins.workflow.cps.CpsScmFlowDefinition.create(CpsScmFlowDefinition.java:114)
	at org.jenkinsci.plugins.workflow.cps.CpsScmFlowDefinition.create(CpsScmFlowDefinition.java:68)
	at org.jenkinsci.plugins.workflow.job.WorkflowRun.run(WorkflowRun.java:309)
	at hudson.model.ResourceController.execute(ResourceController.java:97)
	at hudson.model.Executor.run(Executor.java:429)
Finished: FAILURE
~~~
<hr>