//
//  MenuController.m
//  Responsive Resize
//
//  Created by Duncan Midwinter on 24/4/13.
//  Copyright (c) 2013 Midwinter Duncan Grant. All rights reserved.
//


#import "MenuController.h"
#import "CustomUAController.h"

@implementation MenuController

- (IBAction)customUAString:(id)sender {
    
    if (! myCustomUAController ) {
		myCustomUAController	= [[CustomUAController alloc] init];
	}
	
	[myCustomUAController showWindow:self];
    
}

- (IBAction)safari7Mac:(id)sender {

	myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentSafari7Mac")])];
}


- (IBAction)safari6Mac:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];    
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentSafari6Mac")])];
}

- (IBAction)safari5Mac:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentSafari5Mac")])];
}

- (IBAction)safari5Win:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentSafari5Win")])];
}

- (IBAction)chrome26Mac:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentChromeMac")])];
}

- (IBAction)chrome26Win:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentChromeWin")])];
}

- (IBAction)firefox20Mac:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentFirefoxMac")])];
}

- (IBAction)firefox23Win:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentFirefoxWin")])];
}

- (IBAction)opera12Mac:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentOperaMac")])];
}

- (IBAction)opera12Win:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentOperaWin")])];
}

- (IBAction)ie10:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentIe10")])];
}

- (IBAction)ie9:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentIe9")])];
}

- (IBAction)ie8:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentIe8")])];
}

- (IBAction)ie7:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentIe7")])];
}

- (IBAction)ie9xbox:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentIe9Xbox")])];
}

- (IBAction)iPhone7:(id)sender {

	myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentIphoneIos7")])];
}

- (IBAction)iPhone6:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentIphoneIos6")])];
}

- (IBAction)iPhone5:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentIphoneIos5")])];
}

- (IBAction)iPhone4:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentIphoneIos4")])];
    
}

- (IBAction)iPad7:(id)sender {
	
	myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentIpadIos7")])];
}

- (IBAction)iPad6:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentIpadIos6")])];
}

- (IBAction)iPad5:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentIpadIos5")])];
}

- (IBAction)iPad4:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentIpadIos4")])];
    
}

- (IBAction)iPodTouch5:(id)sender {
    
    myGetUserAgent = [[GetUserAgent alloc] init];
    
    [(AppDelegate*)[[NSApplication sharedApplication] delegate] refreshWebView:([myGetUserAgent withKeyOf:(@"agentIpodIos5")])];
}

@end
