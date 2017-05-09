//
//  CustomUAController.m
//  Responsive Resize
//
//  Created by Duncan Midwinter on 24/4/13.
//  Copyright (c) 2013 Midwinter Duncan Grant. All rights reserved.
//

#import "CustomUAController.h"
#import "AppDelegate.h"

@implementation CustomUAController
@synthesize uaTextField;

- (id) init {
    
	if ( ! (self = [super initWithWindowNibName: @"CustomUAController"]) ) {
		return nil;
	}
    
	return self;
}

- (void)windowDidLoad {
    
}


- (IBAction)submitUAString:(id)sender {
    
    NSString *customUAString = [uaTextField stringValue];
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:(customUAString)];
    
}

@end