//
//  MenuController.h
//  Responsive Resize
//
//  Created by Duncan Midwinter on 24/4/13.
//  Copyright (c) 2013 Midwinter Duncan Grant. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import "AppDelegate.h"
#import "GetUserAgent.h"

@class CustomUAController;


@interface MenuController : NSMenu {
    
    CustomUAController *myCustomUAController;
    
    GetUserAgent *myGetUserAgent;
    
}


- (IBAction)customUAString:(id)sender;

- (IBAction)safari7Mac:(id)sender;
- (IBAction)safari6Mac:(id)sender;
- (IBAction)safari5Mac:(id)sender;
- (IBAction)safari5Win:(id)sender;

- (IBAction)chrome26Mac:(id)sender;
- (IBAction)chrome26Win:(id)sender;

- (IBAction)firefox20Mac:(id)sender;
- (IBAction)firefox23Win:(id)sender;

- (IBAction)opera12Mac:(id)sender;
- (IBAction)opera12Win:(id)sender;

- (IBAction)ie10:(id)sender;
- (IBAction)ie9:(id)sender;
- (IBAction)ie8:(id)sender;
- (IBAction)ie7:(id)sender;
- (IBAction)ie9xbox:(id)sender;

- (IBAction)iPhone7:(id)sender;
- (IBAction)iPhone6:(id)sender;
- (IBAction)iPhone5:(id)sender;
- (IBAction)iPhone4:(id)sender;

- (IBAction)iPad7:(id)sender;
- (IBAction)iPad6:(id)sender;
- (IBAction)iPad5:(id)sender;
- (IBAction)iPad4:(id)sender;
- (IBAction)iPodTouch5:(id)sender;

@end
