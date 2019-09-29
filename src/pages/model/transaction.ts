export interface TransactionModel {
        errorMsg: string,
        requestId: string,
        result: [
          {
            accountId: string,
            categoryTags: [
              string
            ],
            currencyAmount: number,
            customerId: string,
            description: string,
            id: string,
            locationCity: string,
            locationCountry: string,
            locationLatitude: number,
            locationLongitude: number,
            locationPostalCode: string,
            locationRegion: string,
            locationStreet: string,
            merchantCategoryCode: string,
            merchantId: string,
            merchantName: string,
            originationDateTime: string,
            source: string,
          }
        ],
        statusCode: 0
}