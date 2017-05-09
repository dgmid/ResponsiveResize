//
//  GetUserAgent.h
//  Responsive Resize
//
//  Created by Duncan Midwinter on 26/4/13.
//  Copyright (c) 2013 Midwinter Duncan Grant. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface GetUserAgent : NSObject

@property (strong) NSString * theUAString;


- (NSString*) withKeyOf:(NSString *) theUAString;

@end
