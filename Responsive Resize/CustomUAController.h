//
//  CustomUAController.h
//  Responsive Resize
//
//  Created by Duncan Midwinter on 24/4/13.
//  Copyright (c) 2013 Midwinter Duncan Grant. All rights reserved.
//

#import <Cocoa/Cocoa.h>

@interface CustomUAController : NSWindowController

@property (strong) IBOutlet NSTextField *uaTextField;
- (IBAction)submitUAString:(id)sender;

@end
