//
//  GetUserAgent.m
//  Responsive Resize
//
//  Created by Duncan Midwinter on 26/4/13.
//  Copyright (c) 2013 Midwinter Duncan Grant. All rights reserved.
//

#import "GetUserAgent.h"

@implementation GetUserAgent


- (NSString*) withKeyOf:(NSString *) theUAString {
    
    NSString *path = [[NSBundle mainBundle] pathForResource:@"userAgentStrings" ofType:@"plist"];
    
    NSDictionary *plistData = [NSDictionary dictionaryWithContentsOfFile:path];
    
    return [plistData objectForKey:theUAString];
    
}

@end
