export interface QuestionnaireModel {
    errorMsg: string,
    requestId: string,
    result: [
      { 
        jobType: string, 
        junior: string,
        senior: string,
        manager: string, 
        seniorManager: string,
        monthlyIncome: any, 
        annualIncome: any,\
        married: string, 
        single: string,
        dependents: string, 
        nondepend: string,
        settle: string, 
        notsettle: string, 
        monthlysav: any, 
      }
    ],
    statusCode: 0
}